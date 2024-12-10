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
                    description="With proper communication, i can ensure you get exactly the product you're expecting."
                    title="Communication"
                />
                <PriorityCard
                    icon={<IterationIcon/>}
                    description="Iterating over things allows you to give  regular input to achieve your vision."
                    title="Iteration"
                />
                <PriorityCard
                    icon={<CustomSatisfactionIcon/>}
                    description="With proper communication, i can ensure you get exactly the product you're expecting."
                    title="Customer Satisfaction"
                />
            </div>
        </div>
    )
}