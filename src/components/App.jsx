import React from 'react';
import  {useState}  from 'react';
import Section from './Section/section'; 
import FeedbackOptions from "./Widget/widget";
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


 const  App = () => {
	const [good, setGood]= useState(0);
	const [neutral, setNeutral]= useState(0);
	const [bad, setBad]= useState(0);
	
	const countTotalFeedback = () => {
		const result = good + neutral + bad;
		return result;
	};

	const countPositiveFeedbackPercentage = () => {
		const result = countTotalFeedback();
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

	const onLeaveFeedback = (e) => {
		console.log(e);
		
		const name = e.target.name;
		console.log(good);
		if (name === 'good' ) 
		 {
			setGood(good+1);
			console.log(good);
		}
		else 
		if (name === 'neutral' )
		{
			setNeutral(neutral+1);
		}
		else 
		if (name === 'bad' ) 
		{setBad(bad+1);
		}
}
		const total = countTotalFeedback();
		const positivePercentage = countPositiveFeedbackPercentage();

		const objKey = Object.keys({good, neutral, bad});
		return (
      <div
        style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: 'green'
      }}>
				<Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</div>
		);
	}
 

	export default App;