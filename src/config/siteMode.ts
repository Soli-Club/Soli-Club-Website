const siteMode = import.meta.env.VITE_SITE_MODE?.toLowerCase() ?? 'live'

export const isMaintenanceMode = siteMode === 'maintenance'
