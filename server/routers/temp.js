const express=require('express')
const path=require('path')
let ejs = require("ejs");
const pdf = require("html-pdf");
const router=express.Router()



var inspection_obj={
    title: "inspection 1/18/2021v  ",
    template_title: "temp 1/18/2021",
    date: "18 01 2021",
    actions: 0,
    url: "https://servers.uraudits.com/",
    user_detail: "uzair khurshid / 18 01 2021",
    InspectionComments: [
        {
            id: "594f653e-bafd-462e-a6b0-81f1a4a54fad",
            comment: "some comment on inspection progress",
            status: "Approved",
            inspection_id: "df36ec58-d2c1-4b63-95d0-c3159e626c18",
            reviewer_id: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            hierarchy_organization_id: "f1a261-37ed-2d2d-7e14-a0fcd458be6e",
            user_id: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            signature: null,
            createdAt: "2021-01-26T11:02:54.000Z",
            updatedAt: "2021-01-26T11:02:54.000Z",
            User: {
                id: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                first_name: "uzair",
                last_name: "khurshid",
                email: "uzairkhurshid12@gmail.com",
                organization_id: "a01f08a9-6450-4abe-a189-c7a4474673b6",
                password: "$2a$10$ogEdA70DjjIbizmyKE3IhONyVBv3RhwfW5rpaOr2aCmEL9wCzaz3S",
                identifier: "User",
                group_name: null,
                status: "active",
                created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                refresh_token: "zCB2WtebhtMisM42sylG2X24R5egnImqvswWG3lrU7krgjsNZB",
                avatar: "a01f08a9-6450-4abe-a189-c7a4474673b6/profile/1608009102332.png",
                notification_key: "foRAWCoORjim_g0aQ4ywJv:APA91bEIe5r1i4aonT__1xr80Pg6c9lnheDDNxE0ZECoHs2nZA5Jg3K7e_x6Y5NXctXD4qxJb60X_4-bBA5UvNzBfG7Pvoj7hnjbrcIy2UbfJqB7Qi0NhuU6y_dVyoy7fhEMvRqEzeB8",
                createdAt: "2020-12-01T13:03:38.000Z",
                updatedAt: "2021-01-26T11:07:17.000Z"
            },
            HierarchyOrganization: {
                id: "f1a261-37ed-2d2d-7e14-a0fcd458be6e",
                heirarchy_id: "f1a261-37ed-2d2d-7e14-a0fcd458be6e",
                position: "1",
                status: "active",
                organization_id: "a01f08a9-6450-4abe-a189-c7a4474673b6",
                created_by: "a01f08a9-6450-4abe-a189-c7a4474673b6",
                updated_by: null,
                hierarchy_action_id: null,
                createdAt: "2021-01-06T07:52:36.000Z",
                updatedAt: "2021-01-26T11:01:54.000Z",
                Hierarchy: {
                    id: "f1a261-37ed-2d2d-7e14-a0fcd458be6e",
                    title: "Uzair Khurshid",
                    color: "#fe8500",
                    position: "9",
                    status: null,
                    identifier: "Local",
                    organization_id: "a01f08a9-6450-4abe-a189-c7a4474673b6",
                    created_by: "a01f08a9-6450-4abe-a189-c7a4474673b6",
                    updated_by: null,
                    createdAt: "2020-12-16T07:33:31.000Z",
                    updatedAt: "2020-12-16T07:33:31.000Z"
                }
            }
        }
    ],
    user: {
        id: "05de714a-29e4-442c-bfae-baf11bebc6e9",
        first_name: "uzair",
        last_name: "khurshid",
        email: "uzairkhurshid12@gmail.com",
        organization_id: "a01f08a9-6450-4abe-a189-c7a4474673b6",
        password: "$2a$10$ogEdA70DjjIbizmyKE3IhONyVBv3RhwfW5rpaOr2aCmEL9wCzaz3S",
        identifier: "User",
        group_name: null,
        status: "active",
        created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
        refresh_token: "zCB2WtebhtMisM42sylG2X24R5egnImqvswWG3lrU7krgjsNZB",
        avatar: "a01f08a9-6450-4abe-a189-c7a4474673b6/profile/1608009102332.png",
        notification_key: "dHWlCWdIBEpWpTCQzNskMz:APA91bF45pFe7h3cYdoPEHB7Z1UrGrERmprX_JRsmLsxOUDqogPH_YBugA_mtVN9gMfKqa-T85vs8svGK84psMYCL-VQnX6r8mhmAYbvKBuUSMKnk3a1A0ORsBBoH1UaquxKZhxtfBWa",
        createdAt: "2020-12-01T13:03:38.000Z",
        updatedAt: "2021-01-16T06:18:28.000Z"
    },
    score: 91.66666666666666,
    sections: [
        {
            id: "59ef431d-df29-488e-bb35-df0b38e8e6c9",
            title: "Title Page Title PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle PageTitle Page",
            type: "fixed section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 1,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:28.000Z",
            updatedAt: "2021-01-18T08:12:28.000Z",
            CheckListInspections: [
                {
                    id: "899b9e83-8497-4aff-9e27-4201e770c075",
                    title: "Conducted on",
                    section_id: "59ef431d-df29-488e-bb35-df0b38e8e6c9",
                    data_type: "DateTime",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "January 18, 2021",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "77510541-d74f-4670-aa1c-db575314e53f",
                    title: "Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by Prepared by ",
                    section_id: "59ef431d-df29-488e-bb35-df0b38e8e6c9",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid uzair khurshid ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "d75d20c8-7206-41a6-b311-095aeadaa8e8",
                    title: "Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location Location ",
                    section_id: "59ef431d-df29-488e-bb35-df0b38e8e6c9",
                    data_type: "Location",
                    position: 3,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi karachi ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                }
            ],
            score: 91.25632525
        },
        {
            id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
            title: "Inspection",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 2,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "f6be8cb4-7813-4890-ba89-c05b36329199",
                    title: "name",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "uzair ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "143662a6-097d-4d9a-b4a6-c3f30457a8b3",
                    title: "age",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Number",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "22",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "d28f5398-0151-4ad3-b8d6-7cf7fc7f7353",
                    title: "photo",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Photo",
                    position: 3,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/4448fdd3-b57b-4aee-ad90-3a67348a6413.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "ec6e575a-3012-4fac-ad70-1352da18732d",
                    title: "annotation",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Anotation",
                    position: 4,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition:"",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "f8a6ccb1-aadf-4418-a73f-a2c62d28c0a5",
                    title: "instruction ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Instruction",
                    position: 6,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: ".",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "59288019-db05-43ae-bbc2-84e574778e14",
                    title: "condition question ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 7,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "0",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "0",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "6fa0494b-09af-48a9-a8cc-9e925ee06c4c",
                            title: "some instruction ",
                            section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                            data_type: "Instruction",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "59288019-db05-43ae-bbc2-84e574778e14",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 100
        },
        {
            id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
            title: "sec 2",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 3,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                    title: "response set",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Custom",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [
                        {
                            id: "00268d6b-6f36-4c38-b1fa-8068068bc0f9",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "e52c15fc-9469-41be-8e0c-7779d3a35093",
                            status: "active",
                            title: "yes",
                            created_by: null,
                            position: 0,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        },
                        {
                            id: "c5d2be37-8898-4926-affd-d4ff0a43796f",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "360cf303-0a8a-45df-b331-2d70b9222f10",
                            status: "active",
                            title: "no",
                            created_by: null,
                            position: 1,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        }
                    ],
                    answer: {
                        value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: [
                        "yes"
                    ]
                },
                {
                    id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                    title: "",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "1",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "1",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "0d640ecf-ca0f-4c32-87db-68e69ae75797",
                            title: "your name",
                            section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                            data_type: "Text field",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 100
        },
        {
            id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
            title: "sec 3",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 3,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                    title: "response set",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Custom",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [
                        {
                            id: "00268d6b-6f36-4c38-b1fa-8068068bc0f9",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "e52c15fc-9469-41be-8e0c-7779d3a35093",
                            status: "active",
                            title: "yes",
                            created_by: null,
                            position: 0,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        },
                        {
                            id: "c5d2be37-8898-4926-affd-d4ff0a43796f",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "360cf303-0a8a-45df-b331-2d70b9222f10",
                            status: "active",
                            title: "no",
                            created_by: null,
                            position: 1,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        }
                    ],
                    answer: {
                        value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: [
                        "yes"
                    ]
                },
                {
                    id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                    title: "",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "1",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "1",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "0d640ecf-ca0f-4c32-87db-68e69ae75797",
                            title: "your name",
                            section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                            data_type: "Text field",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 100
        },
        {
            id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
            title: "sec 4",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 3,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                    title: "response set",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Custom",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [
                        {
                            id: "00268d6b-6f36-4c38-b1fa-8068068bc0f9",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "e52c15fc-9469-41be-8e0c-7779d3a35093",
                            status: "active",
                            title: "yes",
                            created_by: null,
                            position: 0,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        },
                        {
                            id: "c5d2be37-8898-4926-affd-d4ff0a43796f",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "360cf303-0a8a-45df-b331-2d70b9222f10",
                            status: "active",
                            title: "no",
                            created_by: null,
                            position: 1,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        }
                    ],
                    answer: {
                        value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: [
                        "yes"
                    ]
                },
                {
                    id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                    title: "",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "1",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "1",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "0d640ecf-ca0f-4c32-87db-68e69ae75797",
                            title: "your name",
                            section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                            data_type: "Text field",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 100
        },
        {
            id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
            title: "sec 5",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 3,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                    title: "response set",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Custom",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [
                        {
                            id: "00268d6b-6f36-4c38-b1fa-8068068bc0f9",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "e52c15fc-9469-41be-8e0c-7779d3a35093",
                            status: "active",
                            title: "yes",
                            created_by: null,
                            position: 0,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        },
                        {
                            id: "c5d2be37-8898-4926-affd-d4ff0a43796f",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "360cf303-0a8a-45df-b331-2d70b9222f10",
                            status: "active",
                            title: "no",
                            created_by: null,
                            position: 1,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        }
                    ],
                    answer: {
                        value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: [
                        "yes"
                    ]
                },
                {
                    id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                    title: "",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "1",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "1",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "0d640ecf-ca0f-4c32-87db-68e69ae75797",
                            title: "your name",
                            section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                            data_type: "Text field",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 40
        },
        {
            id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
            title: "sec 6",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 3,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                    title: "response set",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Custom",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [
                        {
                            id: "00268d6b-6f36-4c38-b1fa-8068068bc0f9",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "e52c15fc-9469-41be-8e0c-7779d3a35093",
                            status: "active",
                            title: "yes",
                            created_by: null,
                            position: 0,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        },
                        {
                            id: "c5d2be37-8898-4926-affd-d4ff0a43796f",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "360cf303-0a8a-45df-b331-2d70b9222f10",
                            status: "active",
                            title: "no",
                            created_by: null,
                            position: 1,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        }
                    ],
                    answer: {
                        value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: [
                        "yes"
                    ]
                },
                {
                    id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                    title: "",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "1",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "1",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "0d640ecf-ca0f-4c32-87db-68e69ae75797",
                            title: "your name",
                            section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                            data_type: "Text field",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 70
        },
        {
            id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
            title: "sec 8",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 3,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                    title: "response set",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Custom",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [
                        {
                            id: "00268d6b-6f36-4c38-b1fa-8068068bc0f9",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "e52c15fc-9469-41be-8e0c-7779d3a35093",
                            status: "active",
                            title: "yes",
                            created_by: null,
                            position: 0,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        },
                        {
                            id: "c5d2be37-8898-4926-affd-d4ff0a43796f",
                            check_id: "c7fb94e1-8830-44d3-8316-947543ca5ebb",
                            response_id: "360cf303-0a8a-45df-b331-2d70b9222f10",
                            status: "active",
                            title: "no",
                            created_by: null,
                            position: 1,
                            updated_by: null,
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z"
                        }
                    ],
                    answer: {
                        value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: [
                        "yes"
                    ]
                },
                {
                    id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                    title: "",
                    section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                    data_type: "Text field",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "1",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "1",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "0d640ecf-ca0f-4c32-87db-68e69ae75797",
                            title: "your name",
                            section_id: "1b6bb9a1-c03d-410e-8051-272db6817de5",
                            data_type: "Text field",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "3e273707-2d97-4edf-aff5-9de14964f8e9",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 3
        },
        {
            id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
            title: "Inspection",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 2,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "f6be8cb4-7813-4890-ba89-c05b36329199",
                    title: "name",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "uzair ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "143662a6-097d-4d9a-b4a6-c3f30457a8b3",
                    title: "age",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Number",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "22",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "d28f5398-0151-4ad3-b8d6-7cf7fc7f7353",
                    title: "photo",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Photo",
                    position: 3,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/4448fdd3-b57b-4aee-ad90-3a67348a6413.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "ec6e575a-3012-4fac-ad70-1352da18732d",
                    title: "annotation",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Anotation",
                    position: 4,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition:"",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "f8a6ccb1-aadf-4418-a73f-a2c62d28c0a5",
                    title: "instruction ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Instruction",
                    position: 6,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: ".",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "59288019-db05-43ae-bbc2-84e574778e14",
                    title: "condition question ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 7,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "0",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "0",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "6fa0494b-09af-48a9-a8cc-9e925ee06c4c",
                            title: "some instruction ",
                            section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                            data_type: "Instruction",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "59288019-db05-43ae-bbc2-84e574778e14",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 50
        },
        {
            id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
            title: "Inspection",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 2,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "f6be8cb4-7813-4890-ba89-c05b36329199",
                    title: "name",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "uzair ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "143662a6-097d-4d9a-b4a6-c3f30457a8b3",
                    title: "age",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Number",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "22",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "d28f5398-0151-4ad3-b8d6-7cf7fc7f7353",
                    title: "photo",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Photo",
                    position: 3,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/4448fdd3-b57b-4aee-ad90-3a67348a6413.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "ec6e575a-3012-4fac-ad70-1352da18732d",
                    title: "annotation",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Anotation",
                    position: 4,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition:"",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "f8a6ccb1-aadf-4418-a73f-a2c62d28c0a5",
                    title: "instruction ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Instruction",
                    position: 6,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: ".",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "59288019-db05-43ae-bbc2-84e574778e14",
                    title: "condition question ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 7,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "0",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "0",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "6fa0494b-09af-48a9-a8cc-9e925ee06c4c",
                            title: "some instruction ",
                            section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                            data_type: "Instruction",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "59288019-db05-43ae-bbc2-84e574778e14",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 80
        },
        {
            id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
            title: "Inspection",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 2,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "f6be8cb4-7813-4890-ba89-c05b36329199",
                    title: "name",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "uzair ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "143662a6-097d-4d9a-b4a6-c3f30457a8b3",
                    title: "age",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Number",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "22",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "d28f5398-0151-4ad3-b8d6-7cf7fc7f7353",
                    title: "photo",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Photo",
                    position: 3,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/4448fdd3-b57b-4aee-ad90-3a67348a6413.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "ec6e575a-3012-4fac-ad70-1352da18732d",
                    title: "annotation",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Anotation",
                    position: 4,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition:"",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "f8a6ccb1-aadf-4418-a73f-a2c62d28c0a5",
                    title: "instruction ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Instruction",
                    position: 6,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: ".",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "59288019-db05-43ae-bbc2-84e574778e14",
                    title: "condition question ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 7,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "0",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "0",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "6fa0494b-09af-48a9-a8cc-9e925ee06c4c",
                            title: "some instruction ",
                            section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                            data_type: "Instruction",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "59288019-db05-43ae-bbc2-84e574778e14",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 10
        },
        {
            id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
            title: "Inspection",
            type: "section",
            template_id: "9dfc267f-4851-45a7-966c-9aad4361f671",
            status: "active",
            position: 2,
            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
            updated_by: null,
            createdAt: "2021-01-18T08:12:29.000Z",
            updatedAt: "2021-01-18T08:12:29.000Z",
            CheckListInspections: [
                {
                    id: "f6be8cb4-7813-4890-ba89-c05b36329199",
                    title: "name",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 1,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: false,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "uzair ",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "143662a6-097d-4d9a-b4a6-c3f30457a8b3",
                    title: "age",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Number",
                    position: 2,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "22",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "d28f5398-0151-4ad3-b8d6-7cf7fc7f7353",
                    title: "photo",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Photo",
                    position: 3,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/4448fdd3-b57b-4aee-ad90-3a67348a6413.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "ec6e575a-3012-4fac-ad70-1352da18732d",
                    title: "annotation",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Anotation",
                    position: 4,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition:"",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.png",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "9026a1ce-49b0-4d91-bb4a-c2029c995607",
                    title: "signature",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Signature",
                    position: 5,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "some signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image some signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with imagesome signature with image",
                        image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "f8a6ccb1-aadf-4418-a73f-a2c62d28c0a5",
                    title: "instruction ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Instruction",
                    position: 6,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "",
                    condition_value: "",
                    is_conditional: "no",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: ".",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [],
                    custom_answers: []
                },
                {
                    id: "59288019-db05-43ae-bbc2-84e574778e14",
                    title: "condition question ",
                    section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                    data_type: "Text field",
                    position: 7,
                    status: "active",
                    created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                    updated_by: null,
                    is_mandatory: true,
                    is_multiple_allowed: false,
                    condition: "is",
                    condition_value: "0",
                    is_conditional: "yes",
                    parent_id: null,
                    createdAt: "2021-01-18T08:12:29.000Z",
                    updatedAt: "2021-01-18T08:12:29.000Z",
                    ResponseSetInspections: [],
                    answer: {
                        value: "0",
                        image: null,
                        note: null,
                        Actions: []
                    },
                    conditional: [
                        {
                            id: "6fa0494b-09af-48a9-a8cc-9e925ee06c4c",
                            title: "some instruction ",
                            section_id: "e1d6e5c5-abec-4a6f-9e7c-30746b2e8d87",
                            data_type: "Instruction",
                            position: 1,
                            status: "active",
                            created_by: "05de714a-29e4-442c-bfae-baf11bebc6e9",
                            updated_by: null,
                            is_mandatory: true,
                            is_multiple_allowed: false,
                            condition: "",
                            condition_value: "",
                            is_conditional: "no",
                            parent_id: "59288019-db05-43ae-bbc2-84e574778e14",
                            createdAt: "2021-01-18T08:12:29.000Z",
                            updatedAt: "2021-01-18T08:12:29.000Z",
                            ResponseSetInspections: []
                        }
                    ],
                    custom_answers: []
                }
            ],
            score: 0
        }
        
    ],
    anwser_obj: {
        "59288019-db05-43ae-bbc2-84e574778e14": {
            value: "0",
            image: null,
            note: null,
            Actions: []
        },
        "3e273707-2d97-4edf-aff5-9de14964f8e9": {
            value: "1",
            image: null,
            note: null,
            Actions: []
        },
        "c7fb94e1-8830-44d3-8316-947543ca5ebb": {
            value: "[\"00268d6b-6f36-4c38-b1fa-8068068bc0f9\"]",
            image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/de9fbb7a-439b-4615-ae6f-91865238713f.png",
            note: null,
            Actions: []
        },
        "ec6e575a-3012-4fac-ad70-1352da18732d": {
            value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.png",
            image: null,
            note: null,
            Actions: []
        },
        "0d640ecf-ca0f-4c32-87db-68e69ae75797": {
            value: "myName /inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-2661-47a5-8226-3285efce4fe3.pnga01f08a9-6450-4abe-a189-c7a4474673b6/inspection/85ea1c6f-efce4fe3.png",
            image: null,
            note: null,
            Actions: []
        },
        "6fa0494b-09af-48a9-a8cc-9e925ee06c4c": {
            value: ".",
            image: null,
            note: null,
            Actions: []
        },
        "f8a6ccb1-aadf-4418-a73f-a2c62d28c0a5": {
            value: ".",
            image: null,
            note: null,
            Actions: []
        },
        "77510541-d74f-4670-aa1c-db575314e53f": {
            value: "uzair khurshid",
            image: null,
            note: null,
            Actions: []
        },
        "d28f5398-0151-4ad3-b8d6-7cf7fc7f7353": {
            value: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/4448fdd3-b57b-4aee-ad90-3a67348a6413.png",
            image: null,
            note: null,
            "Actions": []
        },
        "143662a6-097d-4d9a-b4a6-c3f30457a8b3": {
            value: "22",
            image: null,
            note: null,
            Actions: []
        },
        "f6be8cb4-7813-4890-ba89-c05b36329199": {
            value: "uzair ",
            image: null,
            note: null,
            Actions: []
        },
        "899b9e83-8497-4aff-9e27-4201e770c075": {
            value: "January 18, 2021",
            image: null,
            note: null,
            Actions: []
        },
        "d75d20c8-7206-41a6-b311-095aeadaa8e8": {
            value: "karachi",
            image: null,
            note: null,
            Actions: []
        },
        "9026a1ce-49b0-4d91-bb4a-c2029c995607": {
            value: "some signature with image",
            image: "a01f08a9-6450-4abe-a189-c7a4474673b6/inspection/9e12f91c-5550-4aa3-8b98-e2c616f1753c.png",
            note: null,
            Actions: []
        }
    }
}
var secName=[]
var secScore=[]
for (const i of inspection_obj.sections) {
    
    
    if(i.title.length > 15){
        var s=i.title;
        var ans = s.substr(0, 15);
        secName.push(ans)
    }else{
        secName.push(i.title)
    }
    let score=i.score.toFixed(1)
    secScore.push(score)
}
    

inspection_obj.secName=secName;
inspection_obj.secScore=secScore;




router.get('/final-report',async(req,res)=>{
 
    res.render("final-report",{
        inspection_obj:inspection_obj
    })
})

router.get('/final-report-PDF',async(req,res)=>{
   try {
        ejs.renderFile(path.join(__dirname, '../views/', "final-report.ejs"),{inspection_obj: inspection_obj}, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(path.join(__dirname, '../../public/images/'))
                var _basePath = path.join(__dirname, '../../public/images/');
                let options = {
                    format: 'A4',
                    base: _basePath,
                    paginationOffset: 1,
                    "header": {
                    "height": "4mm",
                    },
                    "footer": {
                    "contents": {
                        default: '<div style="text-align:center;height:10px;bottom:0;"><p style="color: #444; text-align: center;">UrAudits</p></div>'
                    }
                    }
                };
                pdf.create(data, options).toBuffer(async function (err, buffer) {
                    
                    var pdfBuffer = new Buffer.from(buffer);
                    res.setHeader(
                    "Content-disposition",
                    `inline; filename="report.pdf"`
                    );
                    res.setHeader("Content-type", "application/pdf");
                    res.send(pdfBuffer);
                });
            }
        })
   } catch (e) {
       console.log(e.message)
       return res.status(400).send(e.message)
   }
})

router.get('/final-report2',async(req,res)=>{

    res.render("final-report2",{
        inspection_obj:inspection_obj
    })
})
router.get('/final-report-PDF2',async(req,res)=>{
    try {
        ejs.renderFile(path.join(__dirname, '../views/', "final-report2.ejs"),{inspection_obj: inspection_obj}, (err, data) => {
            if (err) {
                  res.send(err);
            } else {
                console.log(path.join(__dirname, '../../public/images/'))
                var _basePath = path.join(__dirname, '../../public/images/');
                let options = {
                    format: 'A4',
                    base: _basePath,
                    paginationOffset: 1,       // Override the initial pagination number
                    "header": {
                      "height": "4mm",
                    //   "contents": {
                    //       default: '<div ><img src="https://servers.uraudits.com//view?Key=meta/header.jpg" width="100%" height="250px"></div>'
                    //   }
                    },
                    "footer": {
                    //   "height": "0mm",
                      "contents": {
                        default: '<div style="text-align:center;height:10px;bottom:0;"><p style="color: #444; text-align: center;">UrAudits</p></div>'
                      }
                    }
                };
                pdf.create(data, options).toBuffer(async function (err, buffer) {
                    
                    var pdfBuffer = new Buffer.from(buffer);
                    res.setHeader(
                      "Content-disposition",
                      `inline; filename="report.pdf"`
                    );
                    res.setHeader("Content-type", "application/pdf");
                    res.send(pdfBuffer);
                  });
            }
        })
    } catch (e) {
        console.log(e.message)
        return res.status(400).send(e.message)
    }
})







router.get('/pdf',async(req,res)=>{
    res.render("pdf")
})
router.get('/pdf-report',(req,res)=>{
    ejs.renderFile(path.join(__dirname, '../views/', "pdf.ejs"), (err, data) => {
        if (err) {
              res.send(err);
        } else {
            console.log(path.join(__dirname, '../../public/images/'))
            var _basePath = path.join(__dirname, '../../public/images/');
            let options = {
                format: 'A4',
                base: _basePath
            };
            pdf.create(data, options).toBuffer( function (err, buffer) {
                
                var pdfBuffer = new Buffer(buffer);
                res.setHeader(
                  "Content-disposition",
                  `inline; filename="report.pdf"`
                );
                res.setHeader("Content-type", "application/pdf");
                res.send(pdfBuffer);
              });
        }
    })
})



module.exports=router