CREATE TABLE articoli
(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Categoria VARCHAR(255) NOT NULL,
    SottoCategoria VARCHAR(255) NOT NULL,
    Prezzo DECIMAL(10, 2) NOT NULL
);

INSERT INTO articoli (Nome, Categoria, SottoCategoria, Prezzo) VALUES
('Panino con salamella', 'Cibo', 'Panini', 5.00),
('Panino vegetariano', 'Cibo', 'Panini', 4.50),
('Grigliata mista', 'Cibo', 'Secondi', 10.00),
('Patatine fritte', 'Cibo', 'Contorni', 2.50),
('Tiramisù', 'Cibo', 'Dolci', 3.00),
('Panino con porchetta', 'Cibo', 'Panini', 5.50),
('Panino con cotoletta', 'Cibo', 'Panini', 5.00),
('Lasagna al ragù', 'Cibo', 'Primi', 6.50),
('Risotto ai funghi', 'Cibo', 'Primi', 7.00),
('Costine alla griglia', 'Cibo', 'Secondi', 9.50),
('Insalata mista', 'Cibo', 'Contorni', 3.00),
('Piadina con crudo e squacquerone', 'Cibo', 'Panini', 5.50),
('Cheesecake ai frutti di bosco', 'Cibo', 'Dolci', 3.50),

('Birra media', 'Bevande', 'Alcoliche', 3.50),
('Spritz', 'Bevande', 'Alcoliche', 4.00),
('Coca-Cola lattina', 'Bevande', 'Analcoliche', 2.00),
('Acqua naturale', 'Bevande', 'Analcoliche', 1.00),
('Caffè espresso', 'Bevande', 'Calde', 1.20),
('Cappuccino', 'Bevande', 'Calde', 1.80),
('Vino rosso bicchiere', 'Bevande', 'Alcoliche', 2.50),
('Vino bianco bottiglia', 'Bevande', 'Alcoliche', 10.00),
('Succo di frutta pesca', 'Bevande', 'Analcoliche', 2.00),
('The freddo limone', 'Bevande', 'Analcoliche', 2.00),
('Cappuccino', 'Bevande', 'Calde', 1.80),
('Cioccolata calda', 'Bevande', 'Calde', 2.50);