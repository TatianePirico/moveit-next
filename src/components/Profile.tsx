import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext); 

    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/TatianePirico.png' alt="Tatiane Pirico"/>
            <div>
                <strong>Tatiane Pirico</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}