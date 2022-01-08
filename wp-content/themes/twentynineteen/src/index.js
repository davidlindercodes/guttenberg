const { registerBlockType } = wp.blocks;
const { 
    RichText,
    InspectorControls, 
    ColorPalette,
    MediaUpload,
    MediaUploadCheck
} = wp.editor;
const { PanelBody, IconButton } = wp.components;


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
        backgroundImage: {
            type: 'string',
            default: null
        }
    },


    // custom functions 



    // build-in functions
    edit({ attributes, setAttributes }) {

        const {
            title,
            body, 
            titleColor,
            bodyColor,
            backgroundImage
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

        function onSelectImageChange(newImage) {
            setAttributes({ backgroundImage: newImage.sizes.full.url });
        }

        return ([ 

            <InspectorControls style={ { marginBottom: '40px'} } >
                <PanelBody title={ 'Font Color Settings' } >
                    <p><strong>Select a Title color:</strong></p>
                    <ColorPalette value={titleColor} onChange= { onTitleColorChange } />
                </PanelBody>
                <PanelBody title={ 'Font Color Settings' } >
                    <p><strong>Select a Body color:</strong></p>
                    <ColorPalette value={bodyColor} onChange= { onBodyColorChange } />
                </PanelBody>
                <PanelBody title={ 'Background Image Settings' } >
                    <p><strong>Select a background image:</strong></p>
                    {/* <MediaUpload 
                        onSelect={ onSelectImageChange }
                        type="image"
                        value={ backgroundImage }
                        render={ ( { open } ) => {
                            <IconButton 
                                onClick={ open }
                                icon="upload"
                                className="editor-media-placeholder__button is-button is-default is-large"
                            >
                                Background Image
                            </IconButton>
                        } }
                    /> */}
                    		<MediaUploadCheck>
			<MediaUpload
				onSelect={ onSelectImageChange }
				allowedTypes="image"
				value={ backgroundImage }
				render={ ( { open } ) => (
                    <IconButton 
                    onClick={ open }
                    icon="upload"
                    className="editor-media-placeholder__button is-button is-default is-large"
                >
                    Background Image
                </IconButton>
				) }
			/>
		</MediaUploadCheck>
                </PanelBody>
            </InspectorControls>,


            <div class="cta-container" style= {{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>

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
            bodyColor,
            backgroundImage
        } = attributes;


        return (
            <div class="cta-container" style= {{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}> 
                <h2 style={ { color: titleColor } }> { title } </h2>
                <RichText.Content   tagName="p"
                                    value={body}
                                    style={ { color: bodyColor } } />
            </div>
        );
    }
})