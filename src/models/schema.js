export const schema = {
    "models": {
        "Votes": {
            "name": "Votes",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Team": {
                    "name": "Team",
                    "isArray": false,
                    "type": {
                        "enum": "Teams"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Category": {
                    "name": "Category",
                    "isArray": false,
                    "type": {
                        "enum": "Categories"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "User": {
                    "name": "User",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Votes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Categories": {
            "name": "Categories",
            "values": [
                "INNOVATION",
                "IMPACT",
                "VALUE",
                "REALISM"
            ]
        },
        "Teams": {
            "name": "Teams",
            "values": [
                "ONE",
                "THREE",
                "FOUR",
                "FIVE",
                "SIX"
            ]
        }
    },
    "nonModels": {},
    "version": "4a29f18daf858100edef60b1e2813789"
};