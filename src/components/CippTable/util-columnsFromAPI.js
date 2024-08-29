import { getCippTranslation } from "../../utils/get-cipp-translation";

export const utilColumnsFromAPI = (dataSample) => {
  const generateColumns = (obj, parentKey = "") => {
    return Object.keys(obj)
      .map((key) => {
        const accessorKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
          return generateColumns(obj[key], accessorKey);
        }

        return {
          header: getCippTranslation(accessorKey),
          accessorKey: accessorKey,
          // Custom Cell renderer for handling objects or complex data types
          Cell: ({ cell }) => {
            const value = cell.getValue();
            return typeof value === "object" && value !== null
              ? JSON.stringify(value) // TODO: is temporary and needs to be replaced with a generic object renderer.
              : value;
          },
        };
      })
      .flat();
  };

  return generateColumns(dataSample);
};
