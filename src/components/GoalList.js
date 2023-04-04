import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";

function GoalList(){
    return (
        <div className="divbox">
            <ul>
                <FirstGoal />
                <SecondGoal />
                <ThirdGoal />
            </ul>
        </div>
    );
}

export default GoalList;