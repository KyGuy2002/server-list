DROP TABLE IF EXISTS Servers;

CREATE TABLE Servers
(
    `UUID` VARCHAR(36) NOT NULL,
    `Name` VARCHAR(50) NOT NULL,
    `IP` VARCHAR(50) NOT NULL,
    `Logo_URL` VARCHAR(500),
    `Banner_URL` VARCHAR(500),
    `Primary_Accent_Color_Hex` VARCHAR(6) NOT NULL,
    `Background_Accent_Color_Hex` VARCHAR(6) NOT NULL,
    PRIMARY KEY (`UUID`)
);

INSERT INTO Servers
(`UUID`, `NAME`, 'IP', 'Primary_Accent_Color_Hex', 'Background_Accent_Color_Hex') 
VALUES 
('f0d735c8-b45e-4e76-ada5-2de62a95c255', 'New Server', 'serverip.com', '59523d', '59523b');