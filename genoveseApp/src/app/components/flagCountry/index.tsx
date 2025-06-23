import { COLORS } from '@/src/constants/colors';
import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';

interface FlagCountryProps {
    country: string;
    size?: number;
}

const countryMap: Record<string, string> = {
  'Brasil': 'Brazil',
  'França': 'France',
  'Itália': 'Italy',
  'Espanha': 'Spain',
  'Argentina': 'Argentina',
  'Noruega': 'Norway',
  'Escócia': 'United Kingdom',  
};

export function FlagCountry({ country, size = 40 }: FlagCountryProps) {
    const [flagUrl, setFlagUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const countryApiName = countryMap[country] || country;

    useEffect(() => {
        setFlagUrl(null);
        setLoading(true);
        fetch(`https://restcountries.com/v3.1/name/${countryApiName}`)
            .then(res => res.json())
            .then(data => {
                if (data && data[0]?.flags?.png) {
                    setFlagUrl(data[0].flags.png);
                }
            })
            .finally(() => setLoading(false));
    }, [country]);

    if (loading) return <ActivityIndicator size="small" color={COLORS.primary} style={{ marginLeft: 8 }} />;
    if (!flagUrl) return null;

    return (
        <Image
            source={{ uri: flagUrl }}
            style={{   width: size,
                height: size,
                marginLeft: 8,
                marginRight: 8,
                borderRadius: size / 2
            }}
            resizeMode="cover"
        />
    );
}