function printId(id: string | number) {
    console.log(id.toUpperCase());
    // Property 'toUpperCase' does not exist on type 'string | number'.
    // Property 'toUpperCase' does not exist on type 'number'.
}

function printId2(id: string | number) {
    // Narrowing the type before accessing
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
}

// Narrowing with typeof
function process(value: string | number) {
    if (typeof value === "string") {
        // Here value is string
        return value.toUpperCase();
    }
    // Here value is number
    return value.toFixed(2);
}

// narrowing with in operator
interface Admin {
    role: string;
    permissions: string[];
}

interface User {
    name: string;
}

function process2(person: Admin | User) {
    if ("permissions" in person) {
        // Here person is type Admin
        console.log(person.permissions);
    }
}

// Ex 2 
type ApiSuccess = {
    data: string[];
};

type ApiError = {
    error: string;
};

function handleResponse(response: ApiSuccess | ApiError) {
    if ("error" in response) {
        // Type is ApiError
        console.error(response.error);
        return;
    }

    // Type is ApiSuccess
    console.log(response.data);
}

// With instanceof

function format(value: Date | string) {
    if (value instanceof Date) {
        // Value is type Date
        return value.toISOString();
    }

    // Value is string
    return value.toUpperCase();
}

// Truthiness Narrowing
function printName(name: string | null) {
    if (name) {
        // Name is string, but rejects ""
        console.log(name.toUpperCase());
    }
}

function processCorrect(value: number | null) {
    if (value === null) {
        return;
    }

    // Value is number
    console.log(value);
}

// Discriminated unions

type State =
    | {
        status: "loading";
    }
    | {
        status: "success";
        data: string[];
    }
    | {
        status: "error";
        error: Error;
    };

function renderState(state: State) {
    switch (state.status) {
        case "loading":
            return "Loading...";

        case "success":
            // State is success
            return state.data.join(", ");

        case "error":
            // State is error
            return state.error.message;
    }
}