import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <Button variant="elevated">Hello</Button>
      <Input placeholder="input" />
      <Progress value={50} />
      <Textarea placeholder="textarea" />
      <Checkbox />
    </div>
  );
};

export default HomePage;
