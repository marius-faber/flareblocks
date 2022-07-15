import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'four-column',
    label: 'sw-cms.blocks.image.imageFourColumn.label',
    category: 'image',
    component: 'sw-cms-block-four-column',
    previewComponent: 'sw-cms-preview-four-column',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        left: {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_camera_large.jpg',
                    },
                },
            },
        },
        'center-left': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_large.jpg',
                    },
                },
            },
        },
        'center-right': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_glasses_large.jpg',
                    },
                },
            },
        },
        right: {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_mountain_large.jpg',
                    },
                },
            },
        },
    },
});
