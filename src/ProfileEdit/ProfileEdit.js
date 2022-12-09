import { useState, useEffect } from "react";
import ProfileHeader from './ProfileHeader'
import 'semantic-ui-css/semantic.min.css'
import '../ProfileForm/FormSection.css'

export function ProfileFormEdit() {

    const getUserName = localStorage.getItem("username");

    //number of education, number of application results
    const [eduCount, setEduCount] = useState(0);
    const [resultCount, setResultCount] = useState(0);
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const [status1, setStatus1] = useState(true);
    const [status2, setStatus2] = useState(true);
    const [status3, setStatus3] = useState(true);
    const [status4, setStatus4] = useState(true);
    const [status5, setStatus5] = useState(true);
    const [status6, setStatus6] = useState(true);
    const [status7, setStatus7] = useState(true);
    const [status8, setStatus8] = useState(true);
    const [status9, setStatus9] = useState(true);
    const [status10, setStatus10] = useState(true);
    const [status11, setStatus11] = useState(true);
    const [status12, setStatus12] = useState(true);

    //Handles Style for the dropdowns for the searches.
    const [showText, setShowText] = useState("none");
    const [showText2, setShowText2] = useState("none");
    const [showText3, setShowText3] = useState("none");
    const [showText4, setShowText4] = useState("none");
    const [showText5, setShowText5] = useState("none");
    const [showText6, setShowText6] = useState("none");
    const [showText7, setShowText7] = useState("none");
    const [showText8, setShowText8] = useState("none");
    const [showText9, setShowText9] = useState("none");
    const [showText10, setShowText10] = useState("none");
    const [showText11, setShowText11] = useState("none");
    const [showText12, setShowText12] = useState("none");
    const [showText13, setShowText13] = useState("none");
    const [showText14, setShowText14] = useState("none");
    const [showText15, setShowText15] = useState("none");
    const [showText16, setShowText16] = useState("none");

    useEffect(() => {
        fetch('http://34.172.189.28:3389/edit_profile/' + getUserName)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setEduCount(res.education_count);
                setResultCount(res.application_count);
                if (res.application_result_1 === 'Rejected') {
                    setStatus1(false);
                }
                if (res.application_result_2 === 'Rejected') {
                    setStatus2(false);
                }
                if (res.application_result_3 === 'Rejected') {
                    setStatus3(false);
                }
                if (res.application_result_4 === 'Rejected') {
                    setStatus4(false);
                }
                if (res.application_result_5 === 'Rejected') {
                    setStatus5(false);
                }
                if (res.application_result_6 === 'Rejected') {
                    setStatus6(false);
                }
                if (res.application_result_7 === 'Rejected') {
                    setStatus7(false);
                }
                if (res.application_result_8 === 'Rejected') {
                    setStatus8(false);
                }
                if (res.application_result_9 === 'Rejected') {
                    setStatus9(false);
                }
                if (res.application_result_10 === 'Rejected') {
                    setStatus10(false);
                }
                if (res.application_result_11 === 'Rejected') {
                    setStatus11(false);
                }
                if (res.application_result_12 === 'Rejected') {
                    setStatus12(false);
                }
            })
    }, [getUserName])

    const handleChange = (event, entry) => {
        data[entry] = event.target.value;
        if (entry.includes("application_result")) {
            var split = entry.split("_");
            var id = split[2];
            switch (id) {
                case "1":
                    handleAppResult1(event);
                    break;
                case "2":
                    handleAppResult2(event);
                    break;
                case "3":
                    handleAppResult3(event);
                    break;
                case "4":
                    handleAppResult4(event);
                    break;
                case "5":
                    handleAppResult5(event);
                    break;
                case "6":
                    handleAppResult6(event);
                    break;
                case "7":
                    handleAppResult7(event);
                    break;
                case "8":
                    handleAppResult8(event);
                    break;
                case "9":
                    handleAppResult9(event);
                    break;
                case "10":
                    handleAppResult10(event);
                    break;
                case "11":
                    handleAppResult11(event);
                    break;
                case "12":
                    handleAppResult12(event);
                    break;
            }
        }
        if (refresh) {
            setRefresh(false);
        }
        else {
            setRefresh(true);
        }
    }


    const handleAppResult1 = event => {
        if (event.target.value === 'Accepted') {
            setStatus1(true);
        }
        else {
            setStatus1(false);
        }
    };

    const handleAppResult2 = event => {
        if (event.target.value === 'Accepted') {
            setStatus2(true);
        }
        else {
            setStatus2(false);
        }
    };

    const handleAppResult3 = event => {
        if (event.target.value === 'Accepted') {
            setStatus3(true);
        }
        else {
            setStatus3(false);
        }
    };

    const handleAppResult4 = event => {
        if (event.target.value === 'Accepted') {
            setStatus4(true);
        }
        else {
            setStatus4(false);
        }
    };

    const handleAppResult5 = event => {
        if (event.target.value === 'Accepted') {
            setStatus5(true);
        }
        else {
            setStatus5(false);
        }
    };

    const handleAppResult6 = event => {
        if (event.target.value === 'Accepted') {
            setStatus6(true);
        }
        else {
            setStatus6(false);
        }
    };

    const handleAppResult7 = event => {
        if (event.target.value === 'Accepted') {
            setStatus7(true);
        }
        else {
            setStatus7(false);
        }
    };

    const handleAppResult8 = event => {
        if (event.target.value === 'Accepted') {
            setStatus8(true);
        }
        else {
            setStatus8(false);
        }
    };

    const handleAppResult9 = event => {
        if (event.target.value === 'Accepted') {
            setStatus9(true);
        }
        else {
            setStatus9(false);
        }
    };

    const handleAppResult10 = event => {
        if (event.target.value === 'Accepted') {
            setStatus10(true);
        }
        else {
            setStatus10(false);
        }
    };

    const handleAppResult11 = event => {
        if (event.target.value === 'Accepted') {
            setStatus11(true);
        }
        else {
            setStatus11(false);
        }
    };

    const handleAppResult12 = event => {
        if (event.target.value === 'Accepted') {
            setStatus12(true);
        }
        else {
            setStatus12(false);
        }
    };

    const [style, setStyle] = useState("uni_search_hid");

    useEffect(() => {
        setCurrentEntry(data.uni_name_1);
        setCurrentEntry2(data.uni_name_2);
        setCurrentEntry3(data.uni_name_3);
        setCurrentEntry4(data.uni_name_4);
        setCurrentEntry5(data.application_university_1);
        setCurrentEntry6(data.application_university_2);
        setCurrentEntry7(data.application_university_3);
        setCurrentEntry8(data.application_university_4);
        setCurrentEntry9(data.application_university_5);
        setCurrentEntry10(data.application_university_6);
        setCurrentEntry11(data.application_university_7);
        setCurrentEntry12(data.application_university_8);
        setCurrentEntry13(data.application_university_9);
        setCurrentEntry14(data.application_university_10);
        setCurrentEntry15(data.application_university_11);
        setCurrentEntry16(data.application_university_12);
    }, [data])

    // 1-4: Undergraduate Education 5-16: Application Results
    // 1
    const [currentEntry, setCurrentEntry] = useState("");
    const [names, setNames] = useState([]);

    const handleKeyPress = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {

                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (var i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue = event => {
        setCurrentEntry(event.target.value);
        setStyle("uni_search");
        setShowText("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry(val.replace("&amp;", "&"));
        setNames([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText("none");
    }

    const handleBlur = () => {
        setCurrentEntry(names[0]);
        setNames([names[0]]);
        setStyle("uni_search_hid");
        setShowText("none");
    }

    var search_names = [];
    for (var i = 0; i < names.length; i++) {
        search_names.push(<div style={{display: showText}} className='search_result' key={names[i]} onMouseDown={handleElementClick}><p>{names[i]}</p></div>);
    }

    // 2
    const [currentEntry2, setCurrentEntry2] = useState("");
    const [names2, setNames2] = useState([]);

    const handleKeyPress2 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames2([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (var i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames2(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue2 = event => {
        setCurrentEntry2(event.target.value);
        setNames2(names2);
        setStyle("uni_search");
        setShowText2("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick2 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry2(val.replace("&amp;", "&"));
        setNames2([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText2("none");
    }

    var search_names2 = [];
    for (i = 0; i < names2.length; i++) {
        search_names2.push(<div style={{display: showText2}} className='search_result' key={names2[i]} onMouseDown={handleElementClick2}><p>{names2[i]}</p></div>);
    }

    const handleBlur2 = () => {
        setCurrentEntry2(names2[0]);
        setNames2([names2[0]]);
        setStyle("uni_search_hid");
        setShowText2("none");
    }

    // 3
    const [currentEntry3, setCurrentEntry3] = useState("");
    const [names3, setNames3] = useState([]);

    const handleKeyPress3 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames3([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames3(universities);
            });
    }
    //Updates the input in response to user queries
    const updateValue3 = event => {
        setCurrentEntry3(event.target.value);
        setNames3(names3);
        setStyle("uni_search");
        setShowText3("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick3 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry3(val.replace("&amp;", "&"));
        setNames3([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText3("none");
    }

    const handleBlur3 = () => {

        setCurrentEntry3(names3[0]);
        setNames3([names3[0]]);
        setStyle("uni_search_hid");
        setShowText3("none");
    }

    var search_names3 = [];
    for (i = 0; i < names3.length; i++) {
        search_names3.push(<div style={{display: showText3}} className='search_result' key={names3[i]} onMouseDown={handleElementClick3}><p>{names3[i]}</p></div>);
    }

    // 4
    const [currentEntry4, setCurrentEntry4] = useState(data.uni_name_4);
    const [names4, setNames4] = useState([]);

    const handleKeyPress4 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames4([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames4(universities);
            });
    }
    //Updates the input in response to user queries
    const updateValue4 = event => {
        setCurrentEntry4(event.target.value);
        setNames4(names4);
        setStyle("uni_search");
        setShowText4("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick4 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry4(val.replace("&amp;", "&"));
        setNames4([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText4("none");
    }

    const handleBlur4 = () => {
        setCurrentEntry4(names4[0]);
        setNames4([names4[0]]);
        setStyle("uni_search_hid");
        setShowText4("none");
    }

    var search_names4 = [];
    for (i = 0; i < names4.length; i++) {
        search_names4.push(<div style={{display: showText4}} className='search_result' key={names4[i]} onMouseDown={handleElementClick4}><p>{names4[i]}</p></div>);
    }

    // 5
    const [currentEntry5, setCurrentEntry5] = useState(data.res_uni_1);
    const [names5, setNames5] = useState([]);

    const handleKeyPress5 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames5([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames5(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue5 = event => {
        setCurrentEntry5(event.target.value);
        setNames5(names5);
        setStyle("uni_search");
        setShowText5("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick5 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry5(val.replace("&amp;", "&"));
        setNames5([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText5("none");
    }

    const handleBlur5 = () => {
        setCurrentEntry5(names5[0]);
        setNames5([names5[0]]);
        setShowText5("none");
        setStyle("uni_search_hid");
    }

    var search_names5 = [];
    for (i = 0; i < names5.length; i++) {
        search_names5.push(<div style={{display: showText5}} className='search_result' key={names5[i]} onMouseDown={handleElementClick5}><p>{names5[i]}</p></div>);
    }

    // 6
    const [currentEntry6, setCurrentEntry6] = useState(data.res_uni_2);
    const [names6, setNames6] = useState([]);

    const handleKeyPress6 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames6([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames6(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue6 = event => {
        setCurrentEntry6(event.target.value);
        setNames6(names6);
        setStyle("uni_search");
        setShowText6("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick6 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry6(val.replace("&amp;", "&"));
        setNames6([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText6("none");
    }

    const handleBlur6 = () => {
        setCurrentEntry6(names6[0]);
        setNames6([names6[0]]);
        setStyle("uni_search_hid");
        setShowText6("none");
    }

    var search_names6 = [];
    for (i = 0; i < names6.length; i++) {
        search_names6.push(<div style={{display: showText6}} className='search_result' key={names6[i]} onMouseDown={handleElementClick6}><p>{names6[i]}</p></div>);
    }

    // 7
    const [currentEntry7, setCurrentEntry7] = useState(data.res_uni_3);
    const [names7, setNames7] = useState([]);

    const handleKeyPress7 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames7([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames7(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue7 = event => {
        setCurrentEntry7(event.target.value);
        setNames7(names7);
        setStyle("uni_search");
        setShowText7("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick7 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry7(val.replace("&amp;", "&"));
        setNames7([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText7("none");
    }

    const handleBlur7 = () => {
        setCurrentEntry7(names7[0]);
        setNames7([names7[0]]);
        setStyle("uni_search_hid");
        setShowText7("none");
    }

    var search_names7 = [];
    for (i = 0; i < names7.length; i++) {
        search_names7.push(<div style={{display: showText7}} className='search_result' key={names7[i]} onMouseDown={handleElementClick7}><p>{names7[i]}</p></div>);
    }

    // 8
    const [currentEntry8, setCurrentEntry8] = useState(data.res_uni_4);
    const [names8, setNames8] = useState([]);

    const handleKeyPress8 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames8([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames8(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue8 = event => {
        setCurrentEntry8(event.target.value);
        setNames8(names8);
        setStyle("uni_search");
        setShowText8("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick8 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry8(val.replace("&amp;", "&"));
        setNames8([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText8("none");
    }

    const handleBlur8 = () => {
        setCurrentEntry8(names8[0]);
        setNames8([names8[0]]);
        setStyle("uni_search_hid");
        setShowText8("none");
    }

    var search_names8 = [];
    for (i = 0; i < names8.length; i++) {
        search_names8.push(<div style={{display: showText8}} className='search_result' key={names8[i]} onMouseDown={handleElementClick8}><p>{names8[i]}</p></div>);
    }

    // 9
    const [currentEntry9, setCurrentEntry9] = useState(data.res_uni_5);
    const [names9, setNames9] = useState([]);

    const handleKeyPress9 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames9([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames9(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue9 = event => {
        setCurrentEntry9(event.target.value);
        setNames9(names9);
        setStyle("uni_search");
        setShowText9("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick9 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry9(val.replace("&amp;", "&"));
        setNames9([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText9("none");
    }

    const handleBlur9 = () => {
        setCurrentEntry9(names9[0]);
        setNames9([names9[0]]);
        setStyle("uni_search_hid");
        setShowText9("none");
    }

    var search_names9 = [];
    for (i = 0; i < names9.length; i++) {
        search_names9.push(<div style={{display: showText9}} className='search_result' key={names9[i]} onMouseDown={handleElementClick9}><p>{names9[i]}</p></div>);
    }

    // 10
    const [currentEntry10, setCurrentEntry10] = useState(data.res_uni_6);
    const [names10, setNames10] = useState([]);

    const handleKeyPress10 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames10([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames10(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue10 = event => {
        setCurrentEntry10(event.target.value);
        setNames10(names10);
        setStyle("uni_search");
        setShowText10("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick10 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry10(val.replace("&amp;", "&"));
        setNames10([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText10("none");
    }

    const handleBlur10 = () => {
        setCurrentEntry10(names10[0]);
        setNames10([names10[0]]);
        setStyle("uni_search_hid");
        setShowText10("none");
    }

    var search_names10 = [];
    for (i = 0; i < names10.length; i++) {
        search_names10.push(<div style={{display: showText10}} className='search_result' key={names10[i]} onMouseDown={handleElementClick10}><p>{names10[i]}</p></div>);
    }

    // 11
    const [currentEntry11, setCurrentEntry11] = useState(data.res_uni_7);
    const [names11, setNames11] = useState([]);

    const handleKeyPress11 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames11([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames11(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue11 = event => {
        setCurrentEntry11(event.target.value);
        setNames11(names11);
        setStyle("uni_search");
        setShowText11("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick11 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry11(val.replace("&amp;", "&"));
        setNames11([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText11("none");
    }

    const handleBlur11 = () => {
        setCurrentEntry11(names11[0]);
        setNames11([names11[0]]);
        setStyle("uni_search_hid");
        setShowText11("none");
    }

    var search_names11 = [];
    for (i = 0; i < names11.length; i++) {
        search_names11.push(<div style={{display: showText11}} className='search_result' key={names11[i]} onMouseDown={handleElementClick11}><p>{names11[i]}</p></div>);
    }

    // 12
    const [currentEntry12, setCurrentEntry12] = useState(data.res_uni_8);
    const [names12, setNames12] = useState([]);

    const handleKeyPress12 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames12([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames12(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue12 = event => {
        setCurrentEntry12(event.target.value);
        setNames12(names12);
        setStyle("uni_search");
        setShowText12("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick12 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry12(val.replace("&amp;", "&"));
        setNames12([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText12("none");
    }

    const handleBlur12 = () => {
        setCurrentEntry12(names12[0]);
        setNames12([names12[0]]);
        setStyle("uni_search_hid");
        setShowText12("none");
    }

    var search_names12 = [];
    for (i = 0; i < names12.length; i++) {
        search_names12.push(<div style={{display: showText12}} className='search_result' key={names12[i]} onMouseDown={handleElementClick12}><p>{names12[i]}</p></div>);
    }

    // 13
    const [currentEntry13, setCurrentEntry13] = useState(data.res_uni_9);
    const [names13, setNames13] = useState([]);

    const handleKeyPress13 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames13([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames13(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue13 = event => {
        setCurrentEntry13(event.target.value);
        setNames13(names13);
        setStyle("uni_search");
        setShowText13("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick13 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry13(val.replace("&amp;", "&"));
        setNames13([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText13("none");
    }

    const handleBlur13 = () => {
        setCurrentEntry13(names13[0]);
        setNames13([names13[0]]);
        setStyle("uni_search_hid");
        setShowText13("none");
    }

    var search_names13 = [];
    for (i = 0; i < names13.length; i++) {
        search_names13.push(<div style={{display: showText13}} className='search_result' key={names13[i]} onMouseDown={handleElementClick13}><p>{names13[i]}</p></div>);
    }

    // 14
    const [currentEntry14, setCurrentEntry14] = useState(data.res_uni_10);
    const [names14, setNames14] = useState([]);

    const handleKeyPress14 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames14([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames14(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue14 = event => {
        setCurrentEntry14(event.target.value);
        setNames14(names14);
        setStyle("uni_search");
        setShowText14("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick14 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry14(val.replace("&amp;", "&"));
        setNames14([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText14("none");
    }

    const handleBlur14 = () => {
        setCurrentEntry14(names14[0]);
        setNames14([names14[0]]);
        setStyle("uni_search_hid");
        setShowText14("none");
    }

    var search_names14 = [];
    for (i = 0; i < names14.length; i++) {
        search_names14.push(<div style={{display: showText14}} className='search_result' key={names14[i]} onMouseDown={handleElementClick14}><p>{names14[i]}</p></div>);
    }

    // 15
    const [currentEntry15, setCurrentEntry15] = useState(data.res_uni_11);
    const [names15, setNames15] = useState([]);

    const handleKeyPress15 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames15([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames15(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue15 = event => {
        setCurrentEntry15(event.target.value);
        setNames15(names15);
        setStyle("uni_search");
        setShowText15("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick15 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry15(val.replace("&amp;", "&"));
        setNames15([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText15("none");
    }

    const handleBlur15 = () => {
        setCurrentEntry15(names15[0]);
        setNames15([names15[0]]);
        setStyle("uni_search_hid");
        setShowText15("none");
    }

    var search_names15 = [];
    for (i = 0; i < names15.length; i++) {
        search_names15.push(<div style={{display: showText15}} className='search_result' key={names15[i]} onMouseDown={handleElementClick15}><p>{names15[i]}</p></div>);
    }

    // 16
    const [currentEntry16, setCurrentEntry16] = useState(data.res_uni_12);
    const [names16, setNames16] = useState([]);

    const handleKeyPress16 = event => {
        var query = event.target.value;
        var api_format = "http://universities.hipolabs.com/search?name="
        api_format = api_format.concat(query, "&country=United+States");

        if (query === "") {
            setNames16([]);
            return;
        }
        //Gets JSON data from the API.
        fetch(api_format)
            .then((res) => res.json())
            .then((result) => {
                var len = (result.length > 7 ? 8 : result.length);
                var universities = [];
                for (i = 0; i < len; i++) {
                    if (universities.includes(result[i].name)) {
                        continue;
                    }
                    else {
                        universities.push(result[i].name);
                    }
                }
                setNames16(universities);
            });
    }

    //Updates the input in response to user queries
    const updateValue16 = event => {
        setCurrentEntry16(event.target.value);
        setNames16(names16);
        setStyle("uni_search");
        setShowText16("initial");
    }

    //Processes clicking on one of the searched features
    const handleElementClick16 = event => {
        event.preventDefault();
        var val = event.target.innerHTML;
        setCurrentEntry16(val.replace("&amp;", "&"));
        setNames16([val.replace("&amp;", "&")]);
        setStyle("uni_search_hid");
        setShowText16("none");
    }

    const handleBlur16 = () => {
        setCurrentEntry16(names16[0]);
        setNames16([names16[0]]);
        setStyle("uni_search_hid");
        setShowText16("none");
    }

    var search_names16 = [];
    for (i = 0; i < names16.length; i++) {
        search_names16.push(<div style={{display: showText16}} className='search_result' key={names16[i]} onMouseDown={handleElementClick16}><p>{names16[i]}</p></div>);
    }

    return (

        <section className="profile_form_all">
            <ProfileHeader />
            <form action={"http://34.172.189.28:3389/edit/" + getUserName} method="POST" encType="multipart/form-data" className="ui form profile_form_final">

                {/* Undergrad */}
                <h3>Education</h3>
                <section className="profile_grad profile_section">
                    <label>
                        <span>University name</span>
                        <input id="collegeSearch" type="text" className="ui selection dropdown" name="edu_uni_name_1" value={currentEntry || ""} placeholder='Enter a University'
                            onKeyUp={handleKeyPress} onChange={updateValue} onBlur={handleBlur} autoComplete='off'></input>
                        <div className={style}>{search_names}</div>
                    </label>

                    <label>
                        <span>Degree Type</span>
                        <select name="edu_degree_1" value={data.uni_degree_1} onChange={event => handleChange(event, "uni_degree_1")} className="ui selection dropdown">
                            <option value={"Associate Degree"}>Associate Degree</option>
                            <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
                            <option value={"Master's Degree"}>Master’s Degree</option>
                            <option value={"Doctoral Degree"}>Doctoral Degree</option>
                            <option value={"Other"}>Other</option>
                        </select>
                    </label>

                    <label>
                        <span>GPA</span>
                        <select name="edu_gpa_1" className="ui selection dropdown" value={data.uni_gpa_1} onChange={event => handleChange(event, "uni_gpa_1")}>
                            <option value={4.0}>4.0</option>
                            <option value={3.9}>3.9</option>
                            <option value={3.8}>3.8</option>
                            <option value={3.7}>3.7</option>
                            <option value={3.6}>3.6</option>
                            <option value={3.5}>3.5</option>
                            <option value={3.4}>3.4</option>
                            <option value={3.3}>3.3</option>
                            <option value={3.2}>3.2</option>
                            <option value={3.1}>3.1</option>
                            <option value={3.0}>3.0</option>
                            <option value={2.9}>2.9</option>
                            <option value={2.8}>2.8</option>
                            <option value={2.7}>2.7</option>
                            <option value={2.6}>2.6</option>
                            <option value={2.5}>2.5</option>
                            <option value={2.4}>2.4</option>
                            <option value={2.3}>2.3</option>
                            <option value={2.2}>2.2</option>
                            <option value={2.1}>2.1</option>
                            <option value={2.0}>2.0 or below</option>
                        </select>
                    </label>

                    <label>
                        <span>Major(s)</span>
                        <div className="ui input"><input type="text" name='edu_major_1'
                            value={data.uni_major_1 || ""} onChange={event => handleChange(event, 'uni_major_1')} /></div>
                    </label>

                    <label>
                        <span>Minor(s)</span>
                        <div className="ui input"><input type="text" name='edu_minor_1'
                            value={data.uni_minor_1 || ""} onChange={event => handleChange(event, "uni_minor_1")} /></div>
                    </label>
                </section>
                {
                    eduCount >= 2 && (<section className="profile_grad profile_section">
                        <label>
                            <span>University name</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="edu_uni_name_2" value={currentEntry2 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress2} onChange={updateValue2} onBlur={handleBlur2} autoComplete='off'></input>
                            <div className={style}>{search_names2}</div>
                        </label>

                        <label>
                            <span>Degree Type</span>
                            <select name="edu_degree_2" className="ui selection dropdown" value={data.uni_degree_2} onChange={event => handleChange(event, "uni_degree_2")}>
                                <option>{data.uni_degree_2}</option>
                                <option value={"Associate Degree"}>Associate Degree</option>
                                <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
                                <option value={"Master's Degree"}>Master’s Degree</option>
                                <option value={"Doctoral Degree"}>Doctoral Degree</option>
                                <option value={"Other"}>Other</option>
                            </select>
                        </label>

                        <label>
                            <span>GPA</span>
                            <select name="edu_gpa_2" className="ui selection dropdown" value={data.uni_gpa_2} onChange={event => handleChange(event, "uni_gpa_2")}>
                                <option value={4.0}>4.0</option>
                                <option value={3.9}>3.9</option>
                                <option value={3.8}>3.8</option>
                                <option value={3.7}>3.7</option>
                                <option value={3.6}>3.6</option>
                                <option value={3.5}>3.5</option>
                                <option value={3.4}>3.4</option>
                                <option value={3.3}>3.3</option>
                                <option value={3.2}>3.2</option>
                                <option value={3.1}>3.1</option>
                                <option value={3.0}>3.0</option>
                                <option value={2.9}>2.9</option>
                                <option value={2.8}>2.8</option>
                                <option value={2.7}>2.7</option>
                                <option value={2.6}>2.6</option>
                                <option value={2.5}>2.5</option>
                                <option value={2.4}>2.4</option>
                                <option value={2.3}>2.3</option>
                                <option value={2.2}>2.2</option>
                                <option value={2.1}>2.1</option>
                                <option value={2.0}>2.0 or below</option>
                            </select>
                        </label>

                        <label>
                            <span>Major(s)</span>
                            <div className="ui input"><input type="text" name='edu_major_2'
                                value={data.uni_major_2 || ""} onChange={event => handleChange(event, "uni_major_2")} /></div>
                        </label>

                        <label>
                            <span>Minor(s)</span>
                            <div className="ui input"><input type="text" name='edu_minor_2'
                                value={data.uni_minor_2 || ""} onChange={event => handleChange(event, "uni_minor_2")} /></div>
                        </label>
                    </section>)
                }
                {
                    eduCount >= 3 && (<section className="profile_grad profile_section">
                        <label>
                            <span>University name</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="edu_uni_name_3" value={currentEntry3 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress3} onChange={updateValue3} onBlur={handleBlur3} autoComplete='off'></input>
                            <div className={style}>{search_names2}</div>
                        </label>

                        <label>
                            <span>Degree Type</span>
                            <select name="edu_degree_3" className="ui selection dropdown" value={data.uni_degree_3} onChange={event => handleChange(event, "uni_degree_3")}>
                                <option value={"Associate Degree"}>Associate Degree</option>
                                <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
                                <option value={"Master's Degree"}>Master’s Degree</option>
                                <option value={"Doctoral Degree"}>Doctoral Degree</option>
                                <option value={"Other"}>Other</option>
                            </select>
                        </label>

                        <label>
                            <span>GPA</span>
                            <select name="edu_gpa_3" className="ui selection dropdown" value={data.uni_gpa_3} onChange={event => handleChange(event, "uni_gpa_3")}>
                                <option value={4.0}>4.0</option>
                                <option value={3.9}>3.9</option>
                                <option value={3.8}>3.8</option>
                                <option value={3.7}>3.7</option>
                                <option value={3.6}>3.6</option>
                                <option value={3.5}>3.5</option>
                                <option value={3.4}>3.4</option>
                                <option value={3.3}>3.3</option>
                                <option value={3.2}>3.2</option>
                                <option value={3.1}>3.1</option>
                                <option value={3.0}>3.0</option>
                                <option value={2.9}>2.9</option>
                                <option value={2.8}>2.8</option>
                                <option value={2.7}>2.7</option>
                                <option value={2.6}>2.6</option>
                                <option value={2.5}>2.5</option>
                                <option value={2.4}>2.4</option>
                                <option value={2.3}>2.3</option>
                                <option value={2.2}>2.2</option>
                                <option value={2.1}>2.1</option>
                                <option value={2.0}>2.0 or below</option>
                            </select>
                        </label>

                        <label>
                            <span>Major(s)</span>
                            <div className="ui input"><input type="text" name='edu_major_3'
                                value={data.uni_major_3 || ""} onChange={event => handleChange(event, "uni_major_3")} /></div>
                        </label>

                        <label>
                            <span>Minor(s)</span>
                            <div className="ui input"><input type="text" name='edu_minor_3'
                                value={data.uni_minor_3 || ""} onChange={event => handleChange(event, "uni_minor_3")} /></div>
                        </label>
                    </section>)
                }
                {
                    eduCount >= 4 && (<section className="profile_grad profile_section">
                        <label>
                            <span>University name</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="edu_uni_name_4" value={currentEntry4 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress4} onChange={updateValue4} onBlur={handleBlur4} autoComplete='off'></input>
                            <div className={style}>{search_names4}</div>
                        </label>

                        <label>
                            <span>Degree Type</span>
                            <select name="edu_degree_4" className="ui selection dropdown" value={data.uni_degree_4} onChange={event => handleChange(event, "uni_degree_4")}>
                                <option value={"Associate Degree"}>Associate Degree</option>
                                <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
                                <option value={"Master's Degree"}>Master’s Degree</option>
                                <option value={"Doctoral Degree"}>Doctoral Degree</option>
                                <option value={"Other"}>Other</option>
                            </select>
                        </label>

                        <label>
                            <span>GPA</span>
                            <select name="edu_gpa_4" className="ui selection dropdown" value={data.uni_degree_4} onChange={event => handleChange(event, "uni_degree_4")}>
                                <option value={4.0}>4.0</option>
                                <option value={3.9}>3.9</option>
                                <option value={3.8}>3.8</option>
                                <option value={3.7}>3.7</option>
                                <option value={3.6}>3.6</option>
                                <option value={3.5}>3.5</option>
                                <option value={3.4}>3.4</option>
                                <option value={3.3}>3.3</option>
                                <option value={3.2}>3.2</option>
                                <option value={3.1}>3.1</option>
                                <option value={3.0}>3.0</option>
                                <option value={2.9}>2.9</option>
                                <option value={2.8}>2.8</option>
                                <option value={2.7}>2.7</option>
                                <option value={2.6}>2.6</option>
                                <option value={2.5}>2.5</option>
                                <option value={2.4}>2.4</option>
                                <option value={2.3}>2.3</option>
                                <option value={2.2}>2.2</option>
                                <option value={2.1}>2.1</option>
                                <option value={2.0}>2.0 or below</option>
                            </select>
                        </label>

                        <label>
                            <span>Major(s)</span>
                            <div className="ui input"><input type="text" name='edu_major_4'
                                value={data.uni_major_4 || ""} onChange={event => handleChange(event, "uni_major_4")} /></div>
                        </label>

                        <label>
                            <span>Minor(s)</span>
                            <div className="ui input"><input type="text" name='edu_minor_4'
                                value={data.uni_minor_4 || ""} onChange={event => handleChange(event, "uni_minor_4")} /></div>
                        </label>
                    </section>)
                }
                <section className="add_buttons">
                    <button type="button" onClick={() => setEduCount(eduCount + 1)} className="change_button change_button_add"><span className="another_icon">+</span>Add Another Education <i>(Max. 4)</i></button>
                    <button type="button" onClick={() => setEduCount(eduCount - 1)} className="change_button change_button_delete"><span className="another_icon">-</span>Delete an Education</button>
                </section>

                {/* Rec */}
                <h3>Recommenders</h3>

                <section className="profile_Rec profile_section">
                    <label className="textarea">
                        <span>Briefly decribe your recommenders</span>
                        <textarea type="text" name="rec" value={data.recommender || ""} onChange={event => handleChange(event, "recommender")} />
                    </label>
                </section>


                {/* Application Results */}

                <h3>Application Results</h3>

                <section className="profile_undergrad profile_section">
                    <label>
                        <span>University Applied</span>
                        <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_1" value={currentEntry5 || ""} placeholder='Enter a University'
                            onKeyUp={handleKeyPress5} onChange={updateValue5} onBlur={handleBlur5}></input>
                        <div className={style}>{search_names5}</div>
                    </label>

                    <label>
                        <span>School</span>
                        <input type="text" name="res_school_1"
                            value={data.application_school_1 || ""} onChange={event => handleChange(event, "application_school_1")} />
                    </label>

                    <label>
                        <span>Program Name</span>
                        <input type="text" name="res_prog_1"
                            value={data.application_program_1 || ""} onChange={event => handleChange(event, "application_program_1")} />
                    </label>

                    <label>
                        <span>Funding</span>
                        <select name="res_funding_1" value={data.application_funding_1} onChange={event => handleChange(event, "application_funding_1")}>
                            <option value={"No Funding"}>No Funding</option>
                            <option value={"Partial Funding"}>Partial Funding</option>
                            <option value={"Full Funding"}>Full Funding</option>
                        </select>
                    </label>

                    <label>
                        <span>Application Result</span>
                        <select name="res_app_1" value={data.application_result_1} onChange={event => handleChange(event, "application_result_1")}>
                            <option value={"Accepted"}>Accepted</option>
                            <option value={"Rejected"}>Rejected</option>
                            <option value={"Waitlisted"}>Waitlisted</option>
                        </select>
                    </label>

                    {
                        status1 && <label>
                            <span>Decision</span>
                            <select name="res_dec_1" value={data.application_decision_1} onChange={event => handleChange(event, "application_decision_1")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>
                    }
                </section>

                {
                    resultCount >= 2 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_2" value={currentEntry6 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress6} onChange={updateValue6} onBlur={handleBlur6}></input>
                            <div className={style}>{search_names6}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_2"
                                value={data.application_school_2 || ""} onChange={event => handleChange(event, "application_school_2")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_2"
                                value={data.application_program_2 || ""} onChange={event => handleChange(event, "application_program_2")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_2" value={data.application_funding_2} onChange={event => handleChange(event, "application_funding_2")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_2" value={data.application_result_2} onChange={event => handleChange(event, "application_result_2")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {
                            status2 && <label>
                                <span>Decision</span>
                                <select name="res_dec_2" value={data.application_decision_2} onChange={event => handleChange(event, "application_decision_2")}>
                                    <option value={"Accepted"}>Accepted</option>
                                    <option value={"Declined"}>Declined</option>
                                </select>
                            </label>
                        }
                    </section>
                }

                {
                    resultCount >= 3 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_3" value={currentEntry7 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress7} onChange={updateValue7} onBlur={handleBlur7}></input>
                            <div className={style}>{search_names7}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_3"
                                value={data.application_school_3 || ""} onChange={event => handleChange(event, "application_school_3")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_3"
                                value={data.application_program_3 || ""} onChange={event => handleChange(event, "application_program_3")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_3" value={data.application_funding_3} onChange={event => handleChange(event, "application_funding_3")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_3" value={data.application_result_3} onChange={event => handleChange(event, "application_result_3")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status3 && <label>
                            <span>Decision</span>
                            <select name="res_dec_3" value={data.application_decision_3} onChange={event => handleChange(event, "application_decision_3")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 4 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_4" value={currentEntry8 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress8} onChange={updateValue8} onBlur={handleBlur8}></input>
                            <div className={style}>{search_names8}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_4"
                                value={data.application_school_4 || ""} onChange={event => handleChange(event, "application_school_4")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_4"
                                value={data.application_program_4 || ""} onChange={event => handleChange(event, "application_program_4")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_4" value={data.application_funding_4} onChange={event => handleChange(event, "application_funding_4")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_4" value={data.application_result_4} onChange={event => handleChange(event, "application_funding_4")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status4 && <label>
                            <span>Decision</span>
                            <select name="res_dec_4" value={data.application_decision_4} onChange={event => handleChange(event, "application_funding_4")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 5 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_5" value={currentEntry9 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress9} onChange={updateValue9} onBlur={handleBlur9}></input>
                            <div className={style}>{search_names9}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_5"
                                value={data.application_school_5 || ""} onChange={event => handleChange(event, "application_school_5")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_5"
                                value={data.application_program_5 || ""} onChange={event => handleChange(event, "application_program_5")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_5" value={data.application_funding_5} onChange={event => handleChange(event, "application_funding_5")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_5" value={data.application_result_5} onChange={event => handleChange(event, "application_result_5")} >
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status5 && <label>
                            <span>Decision</span>
                            <select name="res_dec_5" value={data.application_decision_5} onChange={event => handleChange(event, "application_decision_5")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 6 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_6" value={currentEntry10 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress10} onChange={updateValue10} onBlur={handleBlur10}></input>
                            <div className={style}>{search_names10}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_6"
                                value={data.application_school_6 || ""} onChange={event => handleChange(event, "application_school_6")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_6"
                                value={data.application_program_6 || ""} onChange={event => handleChange(event, "application_program_6")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_6" value={data.application_funding_6} onChange={event => handleChange(event, "application_funding_6")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_6" value={data.application_result_6} onChange={event => handleChange(event, "application_result_6")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status6 && <label>
                            <span>Decision</span>
                            <select name="res_dec_6" value={data.application_decision_6} onChange={event => handleChange(event, "application_decision_6")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 7 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_7" value={currentEntry11 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress11} onChange={updateValue11} onBlur={handleBlur11}></input>
                            <div className={style}>{search_names11}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_7"
                                value={data.application_school_7 || ""} onChange={event => handleChange(event, "application_school_7")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_7"
                                value={data.application_program_7 || ""} onChange={event => handleChange(event, "application_program_7")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_7" value={data.application_funding_7} onChange={event => handleChange(event, "application_funding_7")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_7" value={data.application_result_7} onChange={event => handleChange(event, "application_result_7")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status7 && <label>
                            <span>Decision</span>
                            <select name="res_dec_7" value={data.application_decision_7} onChange={event => handleChange(event, "application_decision_7")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 8 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_8" value={currentEntry12 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress12} onChange={updateValue12} onBlur={handleBlur12}></input>
                            <div className={style}>{search_names12}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_8"
                                value={data.application_school_8 || ""} onChange={event => handleChange(event, "application_school_8")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_8"
                                value={data.application_program_8 || ""} onChange={event => handleChange(event, "application_program_8")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_8" value={data.application_funding_8} onChange={event => handleChange(event, "application_funding_8")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_8" value={data.application_result_8} onChange={event => handleChange(event, "application_result_8")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status8 && <label>
                            <span>Decision</span>
                            <select name="res_dec_8" value={data.application_decision_8} onChange={event => handleChange(event, "application_decision_8")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 9 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_9" value={currentEntry13 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress13} onChange={updateValue13} onBlur={handleBlur13}></input>
                            <div className={style}>{search_names13}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_9"
                                value={data.application_school_9 || ""} onChange={event => handleChange(event, "application_school_9")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_9"
                                value={data.application_program_9 || ""} onChange={event => handleChange(event, "application_program_9")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_9" value={data.application_funding_9} onChange={event => handleChange(event, "application_funding_9")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_9" value={data.application_result_9} onChange={event => handleChange(event, "application_result_9")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status9 && <label>
                            <span>Decision</span>
                            <select name="res_dec_9" value={data.application_decision_9} onChange={event => handleChange(event, "application_decision_9")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 10 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_10" value={currentEntry14 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress14} onChange={updateValue14} onBlur={handleBlur14}></input>
                            <div className={style}>{search_names14}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_10"
                                value={data.application_school_10 || ""} onChange={event => handleChange(event, "application_school_10")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_10"
                                value={data.application_program_10 || ""} onChange={event => handleChange(event, "application_program_10")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_10" value={data.application_funding_10} onChange={event => handleChange(event, "application_funding_10")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_10" value={data.application_result_10} onChange={event => handleChange(event, "application_result_10")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status10 && <label>
                            <span>Decision</span>
                            <select name="res_dec_10" value={data.application_decision_10} onChange={event => handleChange(event, "application_decision_10")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 11 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_11" value={currentEntry15 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress15} onChange={updateValue15} onBlur={handleBlur15}></input>
                            <div className={style}>{search_names15}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_11"
                                value={data.application_school_11 || ""} onChange={event => handleChange(event, "application_school_11")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_11"
                                value={data.application_program_11 || ""} onChange={event => handleChange(event, "application_program_11")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_11" value={data.application_funding_11} onChange={event => handleChange(event, "application_funding_11")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_11" value={data.application_result_11} onChange={event => handleChange(event, "application_result_11")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status11 && <label>
                            <span>Decision</span>
                            <select name="res_dec_11" value={data.application_decision_11} onChange={event => handleChange(event, "application_decision_11")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                {
                    resultCount >= 12 && <section className="profile_undergrad profile_section">
                        <label>
                            <span>University Applied</span>
                            <input id="collegeSearch" type="text" className="ui selection dropdown" name="res_uni_12" value={currentEntry16 || ""} placeholder='Enter a University'
                                onKeyUp={handleKeyPress16} onChange={updateValue16} onBlur={handleBlur16}></input>
                            <div className={style}>{search_names16}</div>
                        </label>

                        <label>
                            <span>School</span>
                            <input type="text" name="res_school_12"
                                value={data.application_school_12 || ""} onChange={event => handleChange(event, "application_school_12")} />
                        </label>

                        <label>
                            <span>Program Name</span>
                            <input type="text" name="res_prog_12"
                                value={data.application_program_12 || ""} onChange={event => handleChange(event, "application_program_12")} />
                        </label>

                        <label>
                            <span>Funding</span>
                            <select name="res_funding_12" value={data.application_funding_12} onChange={event => handleChange(event, "application_funding_12")}>
                                <option value={"No Funding"}>No Funding</option>
                                <option value={"Partial Funding"}>Partial Funding</option>
                                <option value={"Full Funding"}>Full Funding</option>
                            </select>
                        </label>

                        <label>
                            <span>Application Result</span>
                            <select name="res_app_12" value={data.application_result_12} onChange={event => handleChange(event, "application_result_12")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Waitlisted"}>Waitlisted</option>
                            </select>
                        </label>

                        {status12 && <label>
                            <span>Decision</span>
                            <select name="res_dec_12" value={data.application_decision_12} onChange={event => handleChange(event, "application_decision_12")}>
                                <option value={"Accepted"}>Accepted</option>
                                <option value={"Declined"}>Declined</option>
                            </select>
                        </label>}
                    </section>
                }

                <section className="add_button">
                    <button type="button" onClick={() => setResultCount(resultCount + 1)} className="change_button change_button_add"><span className="another_icon">+</span>Add Another Application Result <i>(Max. 12)</i></button>
                    <button type="button" onClick={() => setResultCount(resultCount - 1)} className="change_button change_button_delete"><span className="another_icon">-</span>Delete an Application Result</button>
                </section>

                {/* Demographics  */}

                <h3>Demographics</h3>

                <section className="profile_undergrad profile_section">
                    <label>
                        <span>Ethnicity</span>
                        <select name="demo_eth" value={data.ethnicity} onChange={event=>handleChange(event, "ethnicity")}>
                            <option value={"White"}>White</option>
                            <option value={"Asian"}>Asian</option>
                            <option value={"Black or African American"}>Black or African American</option>
                            <option value={"Hispanic or Latino"}>Hispanic or Latino</option>
                            <option value={"American Indian"}>American Indian</option>
                            <option value={"Pacific Islander"}>Pacific Islander</option>
                        </select>
                    </label>

                    <label>
                        <span>Gender</span>
                        <select name="demo_gender" value={data.gender} onChange={event=>handleChange(event, "gender")}>
                            <option value={"Female"}>Female</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Non-binary"}>Non-binary</option>
                            <option value={"Other"}>Other</option>
                        </select>
                    </label>

                    <label>
                        <span>First-gen?</span>
                        <select name="demo_firstgen" value={data.firstgen} onChange={event=>handleChange(event, "firstgen")}>
                            <option value={"No"}>No</option>
                            <option value={"Yes"}>Yes</option>
                        </select>
                    </label>

                    <label>
                        <span>Citizenship</span>
                        <select name="demo_citizenship" value={data.citizenship} onChange={event=>handleChange(event, "citizenship")}>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republi">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D Ivoire">Cote D Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curacao">Curacao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao">Lao</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">Micronesia</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Barthelemy">Saint Barthelemy</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Martin">Saint Martin</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and the GrenadinesVC">Saint Vincent and the Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten">Sint Maarten</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </label>

                </section>

                {/* Upload Files  */}

                <h3>Upload Statement of Purpose & CV</h3>

                <section className="profile_section" id="profile_upload" >
                    <p>Please erase all your personal information</p><br />
                    <label><span>Re-upload Your Statement of Purpose (.pdf)</span><input type='file' accept=".pdf" name="sop" /></label><br />
                    <label><span>Re-upload Your Curriculum vitae (.pdf)</span><input type='file' accept=".pdf" name="cv" /></label><br />
                </section >

                <section className="submit_button">
                    <button type="submit" id="submitForm">Re-Submit</button>
                </section>
            </form>
        </section>
    );
}

export default ProfileFormEdit
