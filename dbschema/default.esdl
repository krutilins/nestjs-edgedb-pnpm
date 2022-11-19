module default {
    type User {
        required property email -> str {
            constraint exclusive;
            constraint max_len_value(100);
            constraint min_len_value(5);
            constraint regexp(r'^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
        };
        property name -> str;
        property age -> int64;
    }
}
