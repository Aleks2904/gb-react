import styleProfile from './styleProfile.module.css';
import {toggleVisibleProfile, changeFirstName, changeLastName} from "../store/profile";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {Button} from "@material-ui/core";

export const ProfilePage = () => {
    const {firstName, lastName, isVisibleProfile} = useSelector((state) => state)
    const dispatch = useDispatch();
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');

    function updateProfile(e){
        e.preventDefault();
        dispatch(changeFirstName(firstNameValue));
        dispatch(changeLastName(lastNameValue));
        setFirstNameValue('')
        setLastNameValue('')
    }

    return(
        <div className={styleProfile.sections}>
            <div>
                <Button onClick={()=>dispatch(toggleVisibleProfile())}> показать / скрыть профиль</Button>

                {isVisibleProfile && (<div>
                    <p className={styleProfile.description}>
                        first name:
                        <span className={styleProfile.name}>
                            {firstName}
                        </span>
                    </p>
                    <p className={styleProfile.description}>
                        last name:
                        <span className={styleProfile.name}>
                            {lastName}
                        </span>
                    </p>
                </div>)}
            </div>
            <div>
                <form onSubmit={(e)=>updateProfile(e)}>
                    <p className={styleProfile.label}> first name </p>
                    <input onInput={e => setFirstNameValue(e.target.value)} value={firstNameValue}/>
                    <br/>
                    <p className={styleProfile.label}> last name </p>
                    <input onInput={e => setLastNameValue(e.target.value)} value={lastNameValue}/>
                    <br/>
                    <Button className={styleProfile.btn} type="submit">обвноить данные</Button>
                </form>
            </div>
        </div>
    )
}