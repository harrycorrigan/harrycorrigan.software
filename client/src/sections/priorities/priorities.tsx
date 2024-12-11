import "./priorities.css"
import { PriorityCard } from "./priority_card";
import CommunicationIcon from "../../assets/priorities/communication.svg?react"
import IterationIcon from "../../assets/priorities/iteration.svg?react"
import CustomSatisfactionIcon from "../../assets/priorities/customer_satisfaction.svg?react"

export function PrioritiesSection(){
    return (
        <div id="priorities" className="priorities-section section">
            <p className="header-text prioritySection-header">My Priorities.</p>
            <div className="priorityCards-container">
                <PriorityCard
                    icon={<CommunicationIcon/>}
                    description={
                        `
                        Clear & consistent communication ensures every project aligns perfectly with your expectations. 
                        `
                    }
                    title="Communication"
                />
                <PriorityCard
                    icon={<IterationIcon/>}
                    description="Regular input through iteration allows me to bring your vision to life seamlessly."
                    title="Iteration"
                />
                <PriorityCard
                    icon={<CustomSatisfactionIcon/>}
                    description="It's important to me that all customers are satisfied with the product they receive."
                    title="Customer Satisfaction"
                />
            </div>
        </div>
    )
}