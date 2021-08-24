import styled from 'styled-components';

export const Flash = styled.div`
    animation: flash 1s infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${props => props.theme.bg};

    @keyframes flash {
        from {
          box-shadow: 0 0 0 ${props => props.theme.coloralt};
        }
      
        to {
            box-shadow: 0 0 100px ${props => props.theme.coloralt};
        }
      }
`

export const Scroll = styled.div`
    animation: scroll 125s infinite;
    display: flex;
    flex-direction: row;

    @keyframes scroll {
      0% {
        transform: translate3d(50%, 0, 0);
        visibility: visible;
      }
      100% {
        transform: translate3d(-150%, 0, 0);
      }
    }
`
