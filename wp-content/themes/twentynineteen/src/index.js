const { registerBlockType } = wp.blocks;

registerBlockType('david/custom-cta', {
    //build-in attributes
    title: 'Cal to Action', 
    description: 'Block to generate a custom Call to Action',
    category: 'text',
    icon: 'format-image',
    

    // custom attributes 
    attributes: {},


    // custom functions 



    // build-in functions
    edit() {
        return <div> Custom block </div>;

    },


    save() {}

})