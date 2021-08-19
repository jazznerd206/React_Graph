import React from "react";
import { ThemeProvider } from "styled-components";


const Theme = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

export default Theme;

export const themes = {
    light: {
        name: 'light',
        bg: 'white',
        bgalt: 'silvergrey',
        color: 'black',
        coloralt: 'rgb(0,0,0,.25)',
        deco: 'goldenrod',
        accent: 'chartreuse',
        font: 'sans-serif',
        fw: '400',
    },
    dark: {
        name: 'dark',
        bg: 'black',
        bgalt: 'charcoal',
        color: 'chartreuse',
        coloralt: 'lightgreen',
        deco: 'goldenrod',
        accent: 'white',
        font: 'Inconsolata',
        fw: '400'
    },
    solar: {
        name: 'solar',
        bg: 'rgb(45, 57, 58)', // gray black
        bgalt: 'rgb(28, 40, 81)', // dark blue
        color: 'rgb(255, 199, 74)', // yellow
        coloralt: 'rgb(255, 122, 24)', // orange
        deco: 'rgb(73, 99, 107)', // green blue
        accent: 'rgb(219, 37, 32)', // red
        font: 'Space Mono',
        fw: '700'
    },
    jazz: {
        name: 'jazz',
        bg: 'rgb(59, 167, 246)', // light blue
        bgalt: 'rgb(69, 105, 159)', // lighter blue
        color: 'rgb(10, 52, 102)', // dark blue
        coloralt: 'rgb(50, 48, 76)', // dark purple
        deco: 'rgb(163, 188, 208)', // gray
        accent: 'rgb(246, 147, 240)', // pink
        font: 'Yesteryear',
        fw: '700'
    },
    grayscale: {
        name: 'grayscale',
        bg: 'rgb(238, 238, 238)', // light grey
        bgalt: 'rgb(204, 204, 204)', // chinese silver
        color: 'rgb(51, 51, 51)', // dark charcoal
        coloralt: 'rgb(102, 102, 102)', // granite gray
        deco: 'rgb(153, 153, 153)', // spanish gray
        accent: 'rgb(153, 153, 153)', // spanish gray
        font: 'Tenali Ramakrishna',
        fw: '300'
    },
    rainbow: {
        name: 'rainbow',
        bg: 'rgb(55, 131, 255)', // blue
        bgalt: 'rgb(55, 185, 255)', // lighter blue
        color: 'rgb(72, 21, 170)', // purple
        coloralt: 'rgb(77, 233, 76)', // green
        deco: 'rgb(255, 238, 0)', // yellow
        accent: 'rgb(246, 0, 0)', // red
        font: 'Rozha One',
        fw: '700'
    },
    golf: {
        name: 'golf',
        bg: 'rgb(180, 187, 208)', // light blue
        bgalt: 'rgb(199, 209, 226)', // lighter blue
        color: 'rgb(7, 12, 5)', // deep black
        coloralt: 'rgb(60, 92, 16)', // green
        deco: 'rgb(196, 172, 108)', // sand
        accent: 'rgb(231, 222, 180)', // lighter sand
        font: 'Space Mono',
        fw: '700'
    }
}