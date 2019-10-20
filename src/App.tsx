import React, {useState, useEffect} from 'react';

/*
	Cимулятор открытия сундуков,
	

 */
interface IIncome {
	perClick: number,
	perTime: number
}

interface IInfoProps {
	money: number,
	income: IIncome
}
interface IButtonProps {
	readonly title: string,
	onClick: () => void
}
enum UpgradeType {
	Click = 'click',
	Time = 'time'
}
interface IUpgradePrice {
	readonly default: number,
	readonly coefficient: number
}

interface IUpgrade {
	readonly title: string,
	readonly type: UpgradeType,
	readonly price: IUpgradePrice,
	readonly income: number
	count: number
	
}

interface IUpgradeTypeTime extends IUpgrade{
	type: UpgradeType.Time,
	intervalTime: number,
}

interface IUpgradeTypeClick extends IUpgrade{
	type: UpgradeType.Click,
	doubleClick?: boolean,
	chanceOfDoubleClick?: number
}

function upgrade(item: IUpgradeTypeTime | IUpgradeTypeClick) {
	if (item.type ===  UpgradeType.Click) {}
	
}

const Info: React.FC<IInfoProps> = ({money, income}) => {
	return (
		<div className="info">
			<h2>Info</h2>
			<span>Money: ${money}</span>
			<span>Income per click: ${income.perClick}</span>
			<span>Income per sec: ${income.perTime}</span>
		</div>
	)
}

const Button: React.FC<IButtonProps> = ({title, onClick})=> {
	return (
		<button onClick={onClick} className="clickButton">
			{title}
		</button>
	)
}


const DEFAULT_VALUE_MONEY: number = 20;
const DEFAULT_VALUE_INCOME: IIncome = {perClick: 1, perTime: 0}

const App: React.FC = () => {
	const [money, setMoney] = useState(DEFAULT_VALUE_MONEY)
	const [income, setIncome] = useState<IIncome>(DEFAULT_VALUE_INCOME)
	
	const add = (): void=> {
		setMoney(money => money + income.perClick)
	}
	
  return (
    <div className="app">
	    <Info money={money} income={income}/>
	    <Button title="Click" onClick={add}/>
    </div>
  );
}


export default App;
