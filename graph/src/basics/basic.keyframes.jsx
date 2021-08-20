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
          box-shadow: 0 0 0 rgb(255,255,255);
        }
      
        to {
            box-shadow: 0 0 100px rgb(255,255,255);
        }
      }

`