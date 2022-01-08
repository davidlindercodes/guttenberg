const { registerBlockType } = wp.blocks;
const { 
    RichText,
    InspectorControls, 
    ColorPalette
} = wp.editor;
const { PanelBody } = wp.components;


registerBlockType('david/custom-cta', {
    //build-in attributes
    title: 'Cal to Action', 
    description: 'Block to generate a custom Call to Action',
    category: 'text',
    icon: 'format-image',
    

    // custom attributes 
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        titleColor: {
            type: 'string',
            default: 'black'
        },
        body: {
            type : 'string',
            source : 'html', 
            selector: 'p'
        },
        bodyColor: {
            type: 'string',
            default: 'yellow'
        },
    },


    // custom functions 



    // build-in functions
    edit({ attributes, setAttributes }) {

        const {
            title,
            body, 
            titleColor,
            bodyColor
        } = attributes;

        function onChangeTitle(newTitle) {
            setAttributes({ title: newTitle });
        }

        function onChangeBody(newBody) {
            setAttributes({ body: newBody });
        }

        function onTitleColorChange(newColor) {
            setAttributes({ titleColor: newColor });
        }

        function onBodyColorChange(newColor) {
            setAttributes({ bodyColor: newColor });
        }

        return ([ 

            <InspectorControls style={ { marginBottom: '40px'} } >
                <PanelBody title={ 'Font Color Settings' } >
                    <p><strong>Select a Title color:</strong></p>
                    <ColorPalette value={titleColor} onChange= { onTitleColorChange } />
                </PanelBody>
            </InspectorControls>,
            <InspectorControls style={ { marginBottom: '40px'} } >
                <PanelBody title={ 'Font Color Settings' } >
                    <p><strong>Select a Title color:</strong></p>
                    <ColorPalette value={bodyColor} onChange= { onBodyColorChange } />
                </PanelBody>
            </InspectorControls>,

            <div class="cta-container">

                <RichText   key="editable"
                            tagName="h2"
                            placeholder = "Your CTA Title"
                            value={ title } 
                            onChange={ onChangeTitle} 
                            style={ { color: titleColor } }
                            />

                <RichText   key="editable"
                            tagName="p"
                            placeholder = "Your CTA Description"
                            value={ body } 
                            onChange={ onChangeBody}
                            style={ { color: bodyColor } } />
            
            </div> 
        ]);
    },


    save({attributes}) {

        const {
            title,
            body,
            titleColor,
            bodyColor
        } = attributes;


        return (
            <div class="cta-container"> 
                <h2 style={ { color: titleColor } }> { title } </h2>
                <RichText.Content   tagName="p"
                                    value={body}
                                    style={ { color: bodyColor } } />
            </div>
        );
    }
})