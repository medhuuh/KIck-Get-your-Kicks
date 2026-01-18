import React from 'react'

const BrandLogos = () => {
    const brands = [
        { name: 'NIKE', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
        { name: 'ADIDAS', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
        { name: 'CONVERSE', url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg' },
        { name: 'REEBOK', url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg' }
    ]

    return (
        <div style={{ padding: '40px 80px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
                {brands.map((brand, i) => (
                    <img
                        key={i}
                        src={brand.url}
                        alt={brand.name}
                        style={{ height: '30px', opacity: 0.6, filter: 'grayscale(100%) brightness(0.2)' }}
                    />
                ))}
            </div>

            <div style={{ maxWidth: '400px' }}>
                <h4 style={{ color: '#1A8763', marginBottom: '10px' }}>About Us</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                    Express your personal style with versatile denim look that bodes well in a
                    verity of environments. With tailored silhouettes, you'll have that easy, all day
                    polish longing for.
                </p>
            </div>
        </div>
    )
}

export default BrandLogos
