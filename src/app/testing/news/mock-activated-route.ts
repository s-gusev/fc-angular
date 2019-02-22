export class MockActivatedRoute {
  snapshot = {
    paramMap: { get(name) { return 1; } },
    routeConfig: { children: { filter: () => { } } }
  };
}
