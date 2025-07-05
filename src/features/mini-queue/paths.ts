const base = "/mini-queue";
export const MINI_QUEUE_PATHS = {
	BASE: base,
	LIST: `${base}`,
	PROFILE: {
		ROUTE: (id: number | string) => `${base}/${id}/profile`,
		PATH: `${base}/:id/profile`,
	},
};
