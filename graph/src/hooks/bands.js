/**
 * 
 * BOLLINGER BAND HOOKS
 * 
 * 
 * Bollinger Bands are a type of chart indicator for technical analysis and have become widely used by traders in many markets, including stocks, futures, and currencies. Created by John Bollinger in the 1980s, the bands offer unique insights into price and volatility. In fact, there are a number of uses for Bollinger Bands, such as determining overbought and oversold levels, as a trend following tool, and for monitoring for breakouts.
 * 
 * A Bollinger band is the area between the upper and lower bound of a stock's price at any given time.
 * Most often displayed on a price over time (line-point/candlestick) chart
 * 
 * As the stock value approaches one of the bounds, the likelihood of correction grows as well.
 * 
 * For instance, as a stock is losing value, the lower bound of the band is the point at which one can expect
 * the price to recover unpwards, and vice versa for the upper bound, a price drop is incoming.
 * 
// BOLU = MA(TP,n) + m∗σ[TP,n]
// BOLD = MA(TP,n) − m∗σ[TP,n]
// where:
// BOLU = Upper Bollinger Band
// BOLD = Lower Bollinger Band
// MA = Moving average (avg price over last 20 days)
// TP (typical price) = (High+Low+Close)÷3
// n = Number of days in smoothing period
// m = Number of standard deviations
// σ[TP,n] = Standard Deviation over last n periods of TP
 * 
 * 
 */

export const CreateBand = () => {
    // console.log('bands');
}