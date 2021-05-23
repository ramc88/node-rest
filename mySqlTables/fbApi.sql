-- DATA SAMPLE
-- {
--     "data":[{
--         "daily_outcomes_curve":[{
--             "spend":0,
--             "reach":0,
--             "impressions":0,
--             "actions":0
--         }],
--         "estimate_dau":0,
--         "estimate_mau":1000,
--         "estimate_ready":true
--     }]
-- }

create table facebook_api(
    id INT NOT NULL AUTO_INCREMENT,
    daily_outcomes_curve_spend INT NOT NULL,
    daily_outcomes_curve_reach INT NOT NULL,
    daily_outcomes_curve_impressions INT NOT NULL,
    daily_outcomes_curve_actions INT NOT NULL,
    estimate_dau INT NOT NULL,
    estimate_mau INT NOT NULL,
    estimate_ready BOOL
    execution_id INT NOT NULL
    PRIMARY KEY ( id )
);
CREATE UNIQUE INDEX EXECUTION_INDEX ON facebook_api (execution_id ASC)