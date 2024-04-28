import Image from 'next/image';

interface IBaseCurrencyModalContent {
    title: any;
    loading: boolean;
    error: string | null;
    excludedCurrencies: string[];
    OnSelectHandler: (currency: string) => void;
}

const BaseCurrencyModalContent = ({ title, loading, error, OnSelectHandler, excludedCurrencies }: IBaseCurrencyModalContent) => {
    if (loading) return <div className='font-medium font-poppins text-accentDark animate-pulse'>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredCurrencies = Object.entries(title).filter(([currency]) => !excludedCurrencies.includes(currency));

    const fiat = ["EUR", "USD"];

    const showFiatCurrency = filteredCurrencies.filter(([currency]) => fiat.includes(currency));
    const showCryptoCurrency = filteredCurrencies.filter(([currency]) => !fiat.includes(currency))

    return (
        <div className='sm:min-w-[500px]'>
            <h5 className='font-bold text-[22px] font-poppins mb-5'>Base Currency</h5>
            <div className='flex flex-col'>

                <div className=''>
                    <p className='uppercase text-gray-400'>fiat</p>
                    <div className='flex flex-wrap flex-row'>
                        {showFiatCurrency.map(([currency]) => (
                            <div key={currency} className='flex items-center w-1/2 sm:w-2/6 p-2 ' onClick={() => OnSelectHandler(currency)}>
                                <div className='bg-accentLight rounded-xl gap-2 p-2 flex flex-row w-full items-center hover:shadow-xl transition-shadow duration-350  cursor-pointer'>
                                    <div>
                                        <Image src={`/currencies/${currency}.svg`} alt={currency} width={35} height={35} />
                                    </div>

                                    <p className='text-[16px] inline-block'>{currency}</p>
                                </div>

                            </div>))}
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='uppercase text-gray-400'>crypto</p>
                    <div className='flex flex-wrap flex-row'>
                        {showCryptoCurrency.map(([currency]) => (
                            <div key={currency} className='flex items-center w-1/2 sm:w-2/6 p-2 ' onClick={() => OnSelectHandler(currency)}>
                                <div className='bg-accentLight rounded-xl gap-2 p-2 flex flex-row w-full items-center hover:shadow-xl transition-shadow duration-350  cursor-pointer'>
                                    <div>
                                        <Image src={`/currencies/${currency}.svg`} alt={currency} width={35} height={35} />
                                    </div>

                                    <p className='text-[16px] inline-block'>{currency}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BaseCurrencyModalContent;
