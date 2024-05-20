import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';

export default function FinancialsCard() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Daily Financials</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 grid gap-4">
        <div className="flex items-center justify-between">
          <div>Total Revenue</div>
          <div className="text-2xl font-bold">$1,250</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Appointments</div>
          <div className="text-sm font-medium">15</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Average Ticket</div>
          <div className="text-sm font-medium">$83</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Total Revenue</div>
          <div className="text-2xl font-bold">$1,250</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Appointments</div>
          <div className="text-sm font-medium">15</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Average Ticket</div>
          <div className="text-sm font-medium">$83</div>
        </div>
      </CardContent>
    </Card>
  );
}
