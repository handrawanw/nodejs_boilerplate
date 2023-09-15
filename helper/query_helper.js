module.exports={

    parsePageToOffset : ({page, limit}) => {
        if (limit && page) {
            return ((page ? page : 1) - 1) * limit;   
        }

        return 0;
    },
    
}