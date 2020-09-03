export const defaultTableStyles = theme => ({
    root: {},
    paper: {},
    paperResponsiveScrollFullHeightFullWidth: {
        position: 'absolute',
    },
    tableRoot: {
        outline: 'none',
    },
    responsiveBase: {
        overflow: 'auto',
        '@media print': {
            height: 'auto !important',
        },
    },

    // deprecated, but continuing support through v3.x
    responsiveScroll: {
        overflow: 'auto',
        height: '100%',
    },
    // deprecated, but continuing support through v3.x
    responsiveScrollMaxHeight: {
        overflow: 'auto',
        height: '100%',
    },
    // deprecated, but continuing support through v3.x
    responsiveScrollFullHeight: {
        height: '100%',
    },
    // deprecated, but continuing support through v3.x
    responsiveStacked: {
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            overflow: 'hidden',
        },
    },
    // deprecated, but continuing support through v3.x
    responsiveStackedFullWidth: {},
    caption: {
        position: 'absolute',
        left: '-3000px',
    },

    liveAnnounce: {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
    },
    '@global': {
        '@media print': {
            '.datatables-noprint': {
                display: 'none',
            },
        },
    },
});
