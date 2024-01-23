import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'
import { useState } from "react";

export function Task() {
    // const [test, setTest] = useState(false)

    return (
        <div className={styles.task}>
            <input className={styles.checkbox} type="checkbox" />
            <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <button>
                <Trash size={20} />
            </button>
        </div>
    )
} 