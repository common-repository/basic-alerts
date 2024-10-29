/**
 * BLOCK: basic-alerts
 *
 * Registering a basic block with Gutenberg.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls, BlockControls, AlignmentToolbar} = wp.editor;
const {SelectControl, PanelBody, PanelRow} = wp.components;

/**
 * Register: Basic Alerts Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('dima/block-basic-alerts', {

    title: __('Basic Alerts'),
    icon: 'admin-comments',
    category: 'common',
    keywords: [
        __('Basic Alerts'),
    ],
    attributes: {
        alertStyle: {
            type: "string",
            default: "success"
        },
        content: {
            type: "string",
            default: "Alert Text"
        },
        alignment: {
            type: "string",
            default: "none"
        }
    },

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     *
     * @param {Object} props Props.
     * @returns {Mixed} JSX Component.
     */
    edit: (props) => {
        const {setAttributes} = props;
        const {alertStyle, content, alignment} = props.attributes;
        const alertClassName = "basic-alerts-content alert alert-" + alertStyle;

        return (
            <div>
                <InspectorControls>
                    <PanelRow>
                        <PanelBody>
                            <SelectControl
                                label={__('Choose alert style', 'dima-basic-alerts')}
                                value={alertStyle}
                                options=
                                    {[
                                        {value: 'success', label: 'Success'},
                                        {value: 'info', label: 'Info'},
                                        {value: 'warning', label: 'Warning'},
                                        {value: 'danger', label: 'Danger'},
                                    ]}
                                onChange={(newValue) => {
                                    setAttributes({alertStyle: newValue})
                                }}
                            />
                        </PanelBody>
                    </PanelRow>
                </InspectorControls>

                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={(newAlignment) => {
                            setAttributes({alignment: newAlignment})
                        }}
                    />
                </BlockControls>

                <div className={props.className}>
                    <RichText
                        tagName="p"
                        className={alertClassName}
                        style={{textAlign: alignment}}
                        value={content}
                        onChange={(newContent) => setAttributes({content: newContent})}
                        placeholder={__('Alert Text')}
                    />
                </div>
            </div>
        );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     *
     * @param {Object} props Props.
     * @returns {Mixed} JSX Frontend HTML.
     */
    save: (props) => {
        const {alertStyle, content, alignment} = props.attributes;
        const alertClassName = "basic-alerts-content alert alert-" + alertStyle;
        return (
            <div className={props.className}>
                <RichText.Content
                    tagName="p"
                    className={alertClassName}
                    style={{textAlign: alignment}}
                    value={content}
                />
            </div>
        );
    },
});
