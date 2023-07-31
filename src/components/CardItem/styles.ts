import { styled } from '@/styled-system/jsx'

export const CardItemContainer = styled('li', {
  base: {
    '&:hover': {
      '& header img': {
        borderColor: 'imageBorder.hover',
      },
    },

    lg: {
      position: 'relative',

      '&::before': {
        position: 'absolute',
        inset: '-1.5rem',

        content: '""',

        backgroundColor: 'cardBackground',
        width: 'calc(100% + (1.5rem * 2))',
        height: 'calc(100% + (1.5rem * 2))',

        padding: '1.5rem',
        borderTop: '1px solid',
        borderTopColor: 'cardTopBorder',
        borderRadius: '6px',

        boxShadow: 'card',

        backdropFilter: 'blur(8px)',

        transition: 'opacity 0.2s',

        opacity: 0,
      },

      '&:hover': {
        '&::before': {
          opacity: '100%',
        },

        '& h3 a': {
          color: 'primary',

          '& span svg': {
            transform: 'translate(50%, -25%)',
          },
        },
      },
    },
  },
})

export const CardItemContent = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    sm: {
      display: 'grid',
      gridTemplateColumns: 'minmax(200px, 20%) 1fr',
    },

    lg: {
      position: 'relative',
      zIndex: 1,
      gridTemplateColumns: 'minmax(120px, 20%) 1fr',
    },

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  },
  variants: {
    type: {
      project: {
        flexDirection: 'column-reverse',
      },
    },
  },
})

export const Infos = styled('div', {
  base: {
    '& > div': {
      marginBottom: '0.5rem',

      '& p': {
        textStyle: 'sm',

        '& + p': {
          marginTop: '0.25rem',
        },
      },
    },

    '& ul': {
      position: 'relative',

      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',

      '& li a': {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',

        color: 'title',
        textStyle: 'sm',
        fontWeight: 'medium',

        transition: 'color 0.2s',

        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
})

export const Tags = styled('ul', {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.375rem',

    '& span': {
      display: 'block',
      flexWrap: 'wrap',

      background: 'primaryDark',

      padding: '0.25rem 0.5rem',
      borderRadius: '3.125rem',

      color: 'primary',
      textStyle: 'xs',
    },
  },
})
