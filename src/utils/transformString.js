export const transformString =(inputString) => {
    if (inputString.includes('_')) {
       
        const words = inputString.split('_');
      
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
             
        const transformedString = capitalizedWords.join(' ');
        
        return transformedString;
    } else {
 
        const transformedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);
        return transformedString;
    }
}
