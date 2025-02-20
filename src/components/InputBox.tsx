interface InputBoxProps {
    label: string;
    amount: number;
    onAmountChange: (value: number) => void;
    onCurrencyChange: (value: string) => void;
    currencyOptions?: string[];
    selectedCurrency?: string;
    amountDisabled?: boolean;
    currencyDisabled?: boolean;
    className?: string;
}

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = '',
}: InputBoxProps) => {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/22">
                <label className="text-black/40 mb-2 inline-block" htmlFor="currency">
                    {label}
                </label>
                <input
                    id="currency"
                    type="number"
                    className="outline-none w-full bg-transparent py-2"
                    placeholder="amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange(+e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-end">
                <p className="text-black/40 mb-2 w-full">currency type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="p-2">
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;
