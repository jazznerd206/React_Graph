import { createGlobalStyle } from "styled-components";
import Space_WOFF from '../fonts/space-mono-v6-latin/space-mono-v6-latin-regular.woff';
import Space_WOFF2 from '../fonts/space-mono-v6-latin/space-mono-v6-latin-regular.woff2';
import Yesteryear_WOFF from '../fonts/yesteryear-v9-latin/yesteryear-v9-latin-regular.woff';
import Yesteryear_WOFF2 from '../fonts/yesteryear-v9-latin/yesteryear-v9-latin-regular.woff2';
import Oxy_WOFF from '../fonts/oxygen-mono-v8-latin/oxygen-mono-v8-latin-regular.woff';
import Oxy_WOFF2 from '../fonts/oxygen-mono-v8-latin/oxygen-mono-v8-latin-regular.woff2';
import Tenali_WOFF from '../fonts/tenali-ramakrishna-v7-latin/tenali-ramakrishna-v7-latin-regular.woff';
import Tenali_WOFF2 from '../fonts/tenali-ramakrishna-v7-latin/tenali-ramakrishna-v7-latin-regular.woff2';
import Rozha_WOFF from '../fonts/rozha-one-v8-latin/rozha-one-v8-latin-regular.woff';
import Rozha_WOFF2 from '../fonts/rozha-one-v8-latin/rozha-one-v8-latin-regular.woff2';
import Basic_WOFF from '../fonts/basic-v10-latin/basic-v10-latin-regular.woff';
import Basic_WOFF2 from '../fonts/basic-v10-latin/basic-v10-latin-regular.woff2';

export const Fonts = createGlobalStyle`
     /* space-mono-regular - latin */
    @font-face {
        font-family: 'Space Mono';
        src:    url(${Space_WOFF2}) format('woff2'),
                url(${Space_WOFF}) format('woff');
    }
    /* yesteryear-regular - latin */
    @font-face {
        font-family: 'Yesteryear';
        src:    url(${Yesteryear_WOFF2}) format('woff2'),
                url(${Yesteryear_WOFF}) format('woff');
    }
  /* oxygen-mono-regular - latin */
  @font-face {
        font-family: 'Oxygen Mono';
        src:    url(${Oxy_WOFF2}) format('woff2'),
                url(${Oxy_WOFF}) format('woff');
    }
  /* tenali-ramakrishna-regular - latin */
  @font-face {
        font-family: 'Tenali Ramakrishna';
        src:    url(${Tenali_WOFF2}) format('woff2'),
                url(${Tenali_WOFF}) format('woff');
    }
  /* rozha-one-regular - latin */
  @font-face {
        font-family: 'Rozha One';
        src:    url(${Rozha_WOFF2}) format('woff2'),
                url(${Rozha_WOFF}) format('woff');
    }
  /* basic-regular - latin */
  @font-face {
        font-family: 'Basic';
        src:    url(${Basic_WOFF2}) format('woff2'),
                url(${Basic_WOFF}) format('woff');
    }
`;