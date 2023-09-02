import { useCallback, useEffect, useState } from 'react';
import { 
    useLocation,
    useSearchParams
} from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsProvider';
import { replaceParam } from '../../../../constants/globals';

const useConnect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { search } = useLocation();

    const [filters, setFilters] = useState<string[]>();

    const { handleFilters } = useProducts();

    const handleChange = useCallback((val: string) => {
        if (!filters) {
            setFilters([val]);
        } else if (!filters.includes(val)) { 
               setFilters(filters?.concat(val))
        } else {
            if (filters.length > 1) {
                setFilters(filters.filter((item) => item !== val));
            } else {
                setFilters(undefined);
            }
        }
    }, [filters]);
    
    const resetFilters = useCallback(() => {
        setFilters(undefined);
        setSearchParams(() => {
            return new URLSearchParams({
              ...replaceParam("filters", searchParams),
            });
          })
    }, [filters]);
    
    useEffect(() => {
        if (filters) {
            setSearchParams(() => {
                return new URLSearchParams({
                    ...replaceParam("filters", searchParams),
                    ...{ filters: filters.toString() }
                })
            });
        } else {
            setSearchParams(() => {
                return new URLSearchParams({
                  ...replaceParam("filters", searchParams),
                });
              })        }
    }, [filters]);
    
    useEffect(() => {
        const filters = new URLSearchParams(search).get("filters");
        if (filters) {
            const arrayOfItems = filters.split(',');            
            setFilters(arrayOfItems);
            handleFilters(arrayOfItems);
        }
    }, []);

    useEffect(() => {
        handleFilters(filters ? filters : undefined);
    }, [filters]);

    return {
        filters,
        handleChange,
        resetFilters,
    };
}

export default useConnect;