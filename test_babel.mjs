import fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

// Just output something indicating Babel works
console.log('Babel ready');
