const fs = require('fs');
const path = require('path');

// Source and destination paths
const TAILARK_BLOCKS_PATH = './tailark-components/packages/dusk-kit/blocks';
const WEBSITE_BLOCKS_PATH = './website/src/components/blocks';

// Import mapping for adapting Tailark imports to our project
const IMPORT_MAPPINGS = {
  // Map to our existing UI components first (where we have them)
  "@tailark/core/ui/button": "@/components/ui/button",
  "@tailark/core/ui/card": "@/components/ui/card", 
  "@tailark/core/ui/avatar": "@/components/ui/avatar",
  "@tailark/core/ui/input": "@/components/ui/input",
  "@tailark/core/ui/label": "@/components/ui/label",
  "@tailark/core/ui/textarea": "@/components/ui/textarea",
  "@tailark/core/ui/select": "@/components/ui/select",
  "@tailark/core/ui/accordion": "@/components/ui/accordion",
  "@tailark/core/ui/chart": "@/components/ui/chart",
  
  // Map @elemente/core paths to @tailark/core (seems to be a namespace issue)
  "@elemente/core/ui/accordion": "@/tailark-core/ui/accordion",
  "@elemente/core/ui/chart": "@/tailark-core/ui/chart",
  "@elemente/core/magicui/border-beam": "@/tailark-core/magicui/border-beam",
  "@elemente/core/motion-primitives/infinite-slider": "@/tailark-core/motion-primitives/infinite-slider",
  "@elemente/core/motion-primitives/progressive-blur": "@/tailark-core/motion-primitives/progressive-blur",
  
  // Map @/elemente-core paths to @/tailark-core (local paths)
  "@/elemente-core/ui/accordion": "@/tailark-core/ui/accordion",
  "@/elemente-core/ui/chart": "@/tailark-core/ui/chart",
  "@/elemente-core/magicui/border-beam": "@/tailark-core/magicui/border-beam",
  "@/elemente-core/motion-primitives/infinite-slider": "@/tailark-core/motion-primitives/infinite-slider",
  "@/elemente-core/motion-primitives/progressive-blur": "@/tailark-core/motion-primitives/progressive-blur",
  "@/elemente-core/motion-primitives/text-effect": "@/tailark-core/motion-primitives/text-effect",
  "@/elemente-core/motion-primitives/animated-group": "@/tailark-core/motion-primitives/animated-group",
  
  // Map all other @tailark/core paths to our copied core
  "@tailark/core/components/logo": "@/components/logo",
  "@tailark/core/lib/utils": "@/lib/utils",
  "@tailark/core/motion-primitives/text-effect": "@/tailark-core/motion-primitives/text-effect",
  "@tailark/core/motion-primitives/animated-group": "@/tailark-core/motion-primitives/animated-group",
  "@tailark/core/motion-primitives/infinite-slider": "@/tailark-core/motion-primitives/infinite-slider",
  "@tailark/core/motion-primitives/progressive-blur": "@/tailark-core/motion-primitives/progressive-blur",
  "@tailark/core/magicui/border-beam": "@/tailark-core/magicui/border-beam",
  
  // External dependencies that need installation
  "motion/react": "motion/react",
  "swiper/react": "swiper/react", 
  "swiper/modules": "swiper/modules",
  "dotted-map": "dotted-map"
};

// Content customization for Elemente brand
const CONTENT_REPLACEMENTS = {
  "Tailark": "Elemente",
  "tailark": "elemente", 
  "TAILARK": "ELEMENTE",
  "Tailus": "Elemente",
  "Build and Ship 10x faster": "AI-Driven Outreach That Converts",
  "Modern Software testing reimagined": "AI-Powered Multi-Channel Outreach",
  "Build by makers, loved by thousand developers": "Trusted by sales teams worldwide",
  "Contact Sales": "Contact Our Team",
  "We'll help you find the right plan": "Let's discuss how Elemente can transform your outreach",
  "Stars on GitHub": "Response Rate Improvement",
  "Active Users": "Messages Delivered", 
  "Powered Apps": "Active Customers"
};

function adaptImports(content) {
  let adaptedContent = content;
  
  for (const [tailarkImport, localImport] of Object.entries(IMPORT_MAPPINGS)) {
    adaptedContent = adaptedContent.replace(
      new RegExp(tailarkImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      localImport
    );
  }
  
  return adaptedContent;
}

function customizeContent(content) {
  let customizedContent = content;
  
  for (const [original, replacement] of Object.entries(CONTENT_REPLACEMENTS)) {
    customizedContent = customizedContent.replace(
      new RegExp(original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      replacement
    );
  }
  
  return customizedContent;
}

function pascalCase(str) {
  return str.replace(/(?:^|-)(.)/g, (_, char) => char.toUpperCase());
}

function copyBlock(blockCategory, variant, sourcePath) {
  try {
    const indexPath = path.join(sourcePath, 'index.tsx');
    
    if (!fs.existsSync(indexPath)) {
      console.log(`⚠️  No index.tsx found for ${blockCategory}/${variant}`);
      return null;
    }

    // Create destination directory
    const destDir = path.join(WEBSITE_BLOCKS_PATH, blockCategory);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Create variant subdirectory
    const variantDir = path.join(destDir, `${blockCategory}-${variant}`);
    if (!fs.existsSync(variantDir)) {
      fs.mkdirSync(variantDir, { recursive: true });
    }

    // Copy all files in the source directory
    const sourceFiles = fs.readdirSync(sourcePath);
    
    for (const file of sourceFiles) {
      const sourceFilePath = path.join(sourcePath, file);
      const stat = fs.statSync(sourceFilePath);
      
      if (stat.isFile() && file.endsWith('.tsx')) {
        // Read and adapt the file
        let content = fs.readFileSync(sourceFilePath, 'utf8');
        
        // Adapt imports
        content = adaptImports(content);
        
        // Customize content for Elemente
        content = customizeContent(content);
        
        // For index.tsx, update the default export name
        if (file === 'index.tsx') {
          const componentName = `${pascalCase(blockCategory)}${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
          content = content.replace(
            /export default function \w+/,
            `export default function ${componentName}`
          );
        }
        
        // Write the adapted file
        const destFilePath = path.join(variantDir, file);
        fs.writeFileSync(destFilePath, content);
      }
    }

    // Create main component file that exports from the subdirectory
    const componentName = `${pascalCase(blockCategory)}${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    const mainComponentContent = `export { default } from './${blockCategory}-${variant}/index';\n`;
    const mainComponentPath = path.join(destDir, `${blockCategory}-${variant}.tsx`);
    fs.writeFileSync(mainComponentPath, mainComponentContent);
    
    console.log(`✅ Copied ${blockCategory}/${variant} -> ${variantDir} (with ${sourceFiles.filter(f => f.endsWith('.tsx')).length} files)`);
    
    return {
      category: blockCategory,
      variant,
      componentName,
      exportPath: `./${blockCategory}/${blockCategory}-${variant}`
    };
    
  } catch (error) {
    console.error(`❌ Error copying ${blockCategory}/${variant}:`, error.message);
    return null;
  }
}

function generateIndexFile(copiedComponents) {
  const categorizedComponents = {};
  
  // Group by category
  copiedComponents.forEach(comp => {
    if (!categorizedComponents[comp.category]) {
      categorizedComponents[comp.category] = [];
    }
    categorizedComponents[comp.category].push(comp);
  });
  
  let indexContent = `// ===========================
// 🎨 TAILARK BLOCKS LIBRARY
// ===========================
// Auto-generated index file with all Tailark dusk-kit components
// Organized by category for easy importing

`;

  // Generate imports and exports by category
  for (const [category, components] of Object.entries(categorizedComponents)) {
    indexContent += `// ===========================\n`;
    indexContent += `// ${category.toUpperCase().replace(/-/g, ' ')}\n`;
    indexContent += `// ===========================\n`;
    
    components.forEach(comp => {
      indexContent += `export { default as ${comp.componentName} } from '${comp.exportPath}'\n`;
    });
    
    indexContent += '\n';
  }
  
  // Add utility exports
  indexContent += `// ===========================
// UTILITY TYPES & HELPERS
// ===========================
export type BlockCategory = ${Object.keys(categorizedComponents).map(cat => `'${cat}'`).join(' | ')}

export const blockCategories = {
${Object.entries(categorizedComponents).map(([category, components]) => 
  `  '${category}': [${components.map(comp => `'${comp.componentName}'`).join(', ')}]`
).join(',\n')}
} as const

// Helper function to get all blocks in a category
export const getBlocksByCategory = (category: BlockCategory) => {
  return blockCategories[category] || []
}

// Get all available block names
export const getAllBlocks = () => {
  return Object.values(blockCategories).flat()
}

// Get total count of blocks
export const getTotalBlockCount = () => {
  return getAllBlocks().length
}
`;

  // Write index file
  const indexPath = path.join(WEBSITE_BLOCKS_PATH, 'index.ts');
  fs.writeFileSync(indexPath, indexContent);
  
  console.log(`📝 Generated index file with ${copiedComponents.length} components`);
}

function main() {
  console.log('🚀 Starting Tailark blocks copy process...\n');
  
  // Ensure destination directory exists
  if (!fs.existsSync(WEBSITE_BLOCKS_PATH)) {
    fs.mkdirSync(WEBSITE_BLOCKS_PATH, { recursive: true });
  }
  
  const copiedComponents = [];
  
  // Read all block categories
  const blockCategories = fs.readdirSync(TAILARK_BLOCKS_PATH)
    .filter(item => {
      const itemPath = path.join(TAILARK_BLOCKS_PATH, item);
      return fs.statSync(itemPath).isDirectory();
    });
  
  console.log(`📦 Found ${blockCategories.length} block categories:`, blockCategories.join(', '));
  console.log('');
  
  // Process each category
  blockCategories.forEach(category => {
    const categoryPath = path.join(TAILARK_BLOCKS_PATH, category);
    
    try {
      const variants = fs.readdirSync(categoryPath)
        .filter(item => {
          const itemPath = path.join(categoryPath, item);
          return fs.statSync(itemPath).isDirectory();
        });
      
      console.log(`📁 Processing ${category} (${variants.length} variants):`);
      
      variants.forEach(variant => {
        const variantPath = path.join(categoryPath, variant);
        const result = copyBlock(category, variant, variantPath);
        
        if (result) {
          copiedComponents.push(result);
        }
      });
      
      console.log('');
      
    } catch (error) {
      console.error(`❌ Error processing category ${category}:`, error.message);
    }
  });
  
  // Generate master index file
  generateIndexFile(copiedComponents);
  
  console.log(`🎉 Successfully copied ${copiedComponents.length} components!`);
  console.log(`📊 Categories processed: ${Object.keys(copiedComponents.reduce((acc, comp) => {
    acc[comp.category] = true;
    return acc;
  }, {})).length}`);
  
  console.log('\n✨ All Tailark blocks are now available in your project!');
  console.log('📖 Check website/src/components/blocks/README.md for usage instructions');
}

// Run the script
main(); 