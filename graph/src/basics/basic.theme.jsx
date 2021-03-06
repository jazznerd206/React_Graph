import React from "react";
import { ThemeProvider } from "styled-components";


const Theme = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

export const themes = {
    light: {
        name: 'light',
        bg: 'rgb(255,255,255)', // white
        bgalt: 'rgb(192,192,192)', // silver
        bgi: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.publicdomainpictures.net%2Fen%2Fview-image.php%3Fimage%3D28763%26picture%3Dplain-white-background&psig=AOvVaw3uWU29-rDqtt50Drd-Zx6t&ust=1629482863996000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjpve_WvfICFQAAAAAdAAAAABAD', // white
        color: 'rgb(0,0,0)', // black
        coloralt: 'rgb(0,0,0,.25)', // transparent black
        deco: 'rgb(218, 165, 32)', // goldenrod
        accent: 'rgb(127, 255, 0)', // chartreuse
        font: 'Basic',
        fs: 'large',
        fw: '400',
    },
    dark: {
        name: 'dark',
        bg: 'rgb(0,0,0)',
        bgalt: 'rgb(51, 51, 51)',
        bgi: 'https://wallpaperaccess.com/full/173801.png', // black
        color: 'rgb(255,255,255)',
        coloralt: 'rgb(192,192,192)',
        deco: 'rgb(218, 165, 32)',
        accent: 'rgb(127, 255, 0)',
        font: 'Space Mono',
        fs: 'large',
        fw: '400'
    },
    solar: {
        name: 'solar',
        bg: 'rgb(45, 57, 58)', // gray black
        bgalt: 'rgb(28, 40, 81)', // dark blue
        bgi: 'https://solarsystem.nasa.gov/system/news_items/main_images/492_Pluto_Main_1600.jpg', // pluto
        color: 'rgb(255, 199, 74)', // yellow
        coloralt: 'rgb(255, 122, 24)', // orange
        deco: 'rgb(73, 99, 107)', // green blue
        accent: 'rgb(219, 37, 32)', // red
        font: 'Space Mono',
        fs: 'xx-large',
        fw: '700'
    },
    grayscale: {
        name: 'grayscale',
        bg: 'rgb(238, 238, 238)', // light grey
        bgalt: 'rgb(204, 204, 204)', // chinese silver
        bgi: 'https://t3.ftcdn.net/jpg/02/01/88/74/240_F_201887441_f6lxO1xrywsWeJ1CFRqvzls2zK4hX6B3.jpg',
        color: 'rgb(51, 51, 51)', // dark charcoal
        coloralt: 'rgb(102, 102, 102)', // granite gray
        deco: 'rgb(153, 153, 153)', // spanish gray
        accent: 'rgb(153, 153, 153)', // spanish gray
        font: 'Tenali Ramakrishna',
        fs: 'large',
        fw: '400'
    },
    rainbow: {
        name: 'rainbow',
        bg: 'rgb(55, 131, 255)', // blue
        bgalt: 'rgb(55, 185, 255)', // lighter blue
        bgi: 'https://media.istockphoto.com/vectors/abstract-pastel-rainbow-gradient-background-ecology-concept-for-your-vector-id1248151713?k=6&m=1248151713&s=170667a&w=0&h=khKBbb_8mSZPPMuluguTh-fvRuyk2HoFgtIukB9gkhI=',
        color: 'rgb(72, 21, 170)', // purple
        coloralt: 'rgb(7, 39, 7)', // green
        deco: 'rgb(255, 238, 0)', // yellow
        accent: 'rgb(246, 0, 0)', // red
        font: 'Rozha One',
        fs: 'xx-large',
        fw: '400'
    },
    golf: {
        name: 'golf',
        bg: 'rgb(180, 187, 208)', // light blue
        bgalt: 'rgb(199, 209, 226)', // lighter blue
        bgi: 'https://assets-cms.thescore.com/uploads/image/file/459276/w640xh480_GettyImages-805299128.jpg?ts=1623092247',
        color: 'rgb(7, 12, 5)', // deep black
        coloralt: 'rgb(60, 92, 16)', // green
        deco: 'rgb(196, 172, 108)', // sand
        accent: 'rgb(231, 222, 180)', // lighter sand
        font: 'Space Mono',
        fs: 'x-large',
        fw: '400'
    }
}