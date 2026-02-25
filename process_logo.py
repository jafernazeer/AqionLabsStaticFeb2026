import sys
from PIL import Image, ImageOps, ImageDraw

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Threshold for making background transparent
    # The 'A' logo is quite dark/colored, wavy lines are light blue/grey
    # We want to keep only the dark colored parts.
    newData = []
    for item in data:
        # Check if pixel is dark enough to be the main logo (skip white and light wavy lines)
        # item is (R, G, B, A)
        avg = (item[0] + item[1] + item[2]) / 3
        if avg < 200: 
            newData.append((0, 0, 0, 255)) # Make it solid black for now as a mask
        else:
            newData.append((255, 255, 255, 0)) # Transparent
    
    img.putdata(newData)
    
    # Find bounding box of the non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        # Crop to the 'A' logo. The 'A' logo is on the left side.
        # Let's crop only the left half of the bbox because right half is "AqionFlo" text.
        left, upper, right, lower = bbox
        width = right - left
        # The 'A' logo is about 1/4th or 1/3rd of the total width
        # We can just crop the first third
        crop_box = (left, upper, left + int(width * 0.25), lower)
        img_cropped = img.crop(crop_box)
        
        # Now find the true bounding box of just the 'A'
        bbox2 = img_cropped.getbbox()
        if bbox2:
            img_cropped = img_cropped.crop(bbox2)
            
            # Now let's apply the gradient color (from-indigo-400 to-purple-400 or a blue gradient)
            # The prompt says: "gradient blue used in Aqionlab's Logo"
            # Which is likely from #3b82f6 (blue-500) to #06b6d4 (cyan-500) or similar, but the user says Aqionlab's Logo, which uses indigo-400 (#818cf8) to purple-400 (#c084fc).
            # Wait, let's just make it a mask and we can color it via CSS!
            # If we make the icon white and transparent, we can use CSS `mask-image` to color it dynamically!
            
            # Make the non-transparent pixels white
            whiteData = []
            for item in img_cropped.getdata():
                if item[3] > 0:
                    whiteData.append((255, 255, 255, item[3]))
                else:
                    whiteData.append(item)
            img_cropped.putdata(whiteData)
            
            img_cropped.save(output_path, "PNG")
            print("Successfully extracted mask to", output_path)
            
        else:
            print("Could not find logo in left crop")
    else:
        print("Could not find any dark pixels")

if __name__ == "__main__":
    process_logo(sys.argv[1], sys.argv[2])
