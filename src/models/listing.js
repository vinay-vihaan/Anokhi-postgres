module.exports = (sequelize, DataTypes) => {
    const Listing = sequelize.define('Listing', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        property_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'properties',
                key: 'id',
            },
        },
        agent_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'agents',
                key: 'id',
            },
        },
        listing_type: {
            type: DataTypes.ENUM('sale', 'rent'),
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive', 'sold', 'rented'),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'listings',
        timestamps: true,
        underscored: true,
    });

    Listing.associate = (models) => {
        Listing.belongsTo(models.Property, { foreignKey: 'property_id' });
        Listing.belongsTo(models.Agent, { foreignKey: 'agent_id' });
    };

    return Listing;
};