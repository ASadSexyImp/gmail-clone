import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Checkbox, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection("mails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
            setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        );
    }, []);
    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settings_left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    </div>
                    <div className="emailList_settings_right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList_List">
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toLocaleString()}
                    />
                ))}
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
                <EmailRow
                    title={"to"}
                    subject={"subject"}
                    description={"message"}
                    time="1pm"
                />
            </div>
        </div>
    );
}

export default EmailList;