import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        const conversionRate = currencyInfo[to] ?? 1;
        setConvertedAmount(parseFloat((amount * conversionRate).toFixed(2)));
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bd-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="from"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-1">
                            <button
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md p-2 bg-blue-500"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mb-1">
                            <InputBox
                                label="to"
                                amount={convertedAmount}
                                amountDisabled={true}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency={to}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 p-4 rounded-xl text-white"
                        >
                            convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
