import { DesignCanvas } from "@/components/design/DesignCanvas";
import { MainOuterFrame } from "@/components/figma/MainOuterFrame";
import { PAGE_HEIGHT } from "@/lib/figma-spec";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-azure-50">
      <DesignCanvas height={PAGE_HEIGHT}>
        <MainOuterFrame />
      </DesignCanvas>
    </main>
  );
}
