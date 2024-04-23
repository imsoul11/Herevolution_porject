import React, { useContext, useRef, useEffect } from 'react';
import UserContext from '../Context/UserContext';

function FormUser() {
    const refc1 = useRef(null);
    const refc2 = useRef(null);
    const refc3 = useRef(null);
    const refc4 = useRef(null);
    const [cities, setcities, inprange, setinprange, sectors, setsectors, preferences, setpreferences, air, setair, water, setwater, land, setland, rainfall, setrainfall] = useContext(UserContext);

    useEffect(() => {
        if(sectors === 'industries')
        {
            setair(false);
            setwater(false);
            setrainfall(false);
            setland(false);
            refc1.current.checked = false;
            refc2.current.checked = false;
            refc3.current.checked = false;
            refc4.current.checked = false;
        }
        if (sectors === 'Agriculture') {

            setair(true);
            setwater(true);
            setrainfall(true);
            setland(false);
            refc1.current.checked = true;
            refc2.current.checked = true;
            refc3.current.checked = false;
            refc4.current.checked = true;
        } else if (sectors === 'Automotive') {
            setair(true);
            setwater(false);
            setrainfall(true);
            setland(true);
            refc1.current.checked = false;
            refc2.current.checked = true;
            refc3.current.checked = true;
            refc4.current.checked = true;
        } else if (sectors === 'Chemical') {
            setair(true);
            setwater(true);
            setrainfall(false);
            setland(false);
            refc1.current.checked = true;
            refc2.current.checked = true;
            refc3.current.checked = false;
            refc4.current.checked = false;
        } else if (sectors === 'Mining') {
            setair(false);
            setwater(true);
            setrainfall(true);
            setland(true);
            refc1.current.checked = true;
            refc2.current.checked = false;
            refc3.current.checked = true;
            refc4.current.checked = true;
        } else if (sectors === 'Textile') {
            setair(true);
            setwater(false);
            setrainfall(true);
            setland(false);
            refc1.current.checked = false;
            refc2.current.checked = true;
            refc3.current.checked = false;
            refc4.current.checked = true;
        } else if(sectors === 'Tech Parks'){
            setair(false);
            setwater(false);
            setrainfall(false);
            setland(true);
            refc1.current.checked = false;
            refc2.current.checked = false;
            refc3.current.checked = true;
            refc4.current.checked = false;
        }
    }, [sectors]);

    const handelsubmit = () => {
        console.log(water)
    }

    const handleSectorChange = (e) => {
        setsectors(e.target.value);
    };

    const handleCityChange = (e) => {
        setcities(e.target.value);
    };

    const handleRangeChange = (e) => {
        setinprange(e.target.value);
    };

    const handleCheckboxChange = (e, value) => {
        if (e.target.checked) {
            setpreferences([...preferences, value]);
        } else {
            setpreferences(preferences.filter((item) => item !== value));
        }
    };

    return (
        <>
            <div className='formouter'>
                <form action="" className='formforinput'>
                    <div className='industryouter'>
                        <div>Select Industry</div>
                        <select name="sectors" id="sectors" className='locpreferences' value={sectors} onChange={handleSectorChange}>
                        <option value="industries">Industries</option>
                            <option value="Agriculture">Agriculture Based</option>
                            <option value="Automotive">Automotive Based</option>
                            <option value="Chemical">Chemical Based</option>
                            <option value="Mining">Mining</option>
                            <option value="Tech Parks">Tech Based</option>
                            <option value="Textile">Textile Based</option>
                        </select>
                    </div>
                    <div className='preferencesouter'>
                    <div className='preferenceheading'>OR</div>
                        <div className='preferenceheading'>Select the preferences</div>
                        <div className='foroptions'>
                            <label className='optionscheck' style={{ color: 'black' }}>
                                <input ref={refc1} type="checkbox" onChange={(e) => setwater(e.target.checked)} />
                                WA
                            </label>
                            <label className='optionscheck' style={{ color: 'black' }}>
                                <input ref={refc2} type="checkbox" onChange={(e) => setair(e.target.checked)} />
                                AQ
                            </label>
                            <label className='optionscheck' style={{ color: 'black' }}>
                                <input ref={refc3} type="checkbox" onChange={(e) => setland(e.target.checked)} />
                                LA
                            </label>
                            <label className='optionscheck' style={{ color: 'black' }}>
                                <input ref={refc4} type="checkbox" onChange={(e) => setrainfall(e.target.checked)}  />
                                Rainfall
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormUser;
