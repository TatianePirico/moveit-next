import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallegeBox.module.css';

export function ChallegeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return(
        <div className={styles.challegeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challegeActive}>
                    <header>Ganhe { activeChallenge.amount } xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challegeFailButton}
                            onClick={ handleChallengeFailed }
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challegeSuccededButton}
                            onClick={ handleChallengeSucceded }
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challegeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios
                    </p>
                </div>
            )}
            
        </div>
    );
}