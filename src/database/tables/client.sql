CREATE TABLE IF NOT EXISTS client(
    id                      UUID  DEFAULT uuid_generate_v4 (),
    name                    TEXT                        ,
    cpf                     TEXT                        ,
    rg                      TEXT                        ,
    gender                  TEXT                        ,
    role                    TEXT                        ,
    income                  REAL                        ,
    created_at              TIMESTAMP                   ,
    updated_at              TIMESTAMP                   ,
    excluded_at             TIMESTAMP
);