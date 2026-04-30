# DAG WBS

## Work Breakdown

1. Identify a clean LLM-relevant rollout target.
   - Status: done
   - Evidence: `hwledger-landing` was clean and describes an LLM/inference runtime.

2. Add README badge.
   - Status: done
   - Evidence: badge added beside existing README badges.

3. Validate.
   - Status: done
   - Evidence: first `bun run build` exposed network-failure build crashes; the
     GitHub fetch helpers were hardened and the rerun passed.

4. Update projects-landing ledger.
   - Status: done
   - Evidence: add landed rollout entry after validation.

## Dependencies

- Step 2 depends on Step 1.
- Step 3 depends on Step 2.
- Step 4 depends on Step 3.
