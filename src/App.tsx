import React from "react";
import InputField from "./components/InputField.tsx";

const App: React.FC = () => {
    return (
        <main>
            <div>
                <h1 className='heading'>Taskify</h1>
                <InputField/>
            </div>
        </main>
    );
};

export default App;
